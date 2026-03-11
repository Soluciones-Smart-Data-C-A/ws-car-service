import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PredictionEngineService {
  constructor(private readonly prisma: PrismaService) {}

  async calculateVehicleHealth(vehicleId: number) {
    const vehicle = await this.prisma.vehicle.findUnique({
      where: { id: vehicleId },
      include: {
        mileageHistory: {
          orderBy: { date: 'asc' },
        },
        serviceRecords: {
          include: { service: { include: { icon: true } } },
        },
      },
    });

    if (!vehicle) {
      throw new NotFoundException(`Vehicle ${vehicleId} not found`);
    }

    // 1. Cálculo de Hábito de Conducción (Promedio Km/día)
    let averageKmPerDay = 15; // default si no hay historial suficiente

    if (vehicle.mileageHistory.length > 1) {
      const firstRecord = vehicle.mileageHistory[0];
      const lastRecord =
        vehicle.mileageHistory[vehicle.mileageHistory.length - 1];
      const timeDiff = lastRecord.date.getTime() - firstRecord.date.getTime();
      const daysDiff = timeDiff / (1000 * 3600 * 24);

      if (daysDiff > 0) {
        const mileageDiff = lastRecord.mileage - firstRecord.mileage;
        averageKmPerDay = mileageDiff / daysDiff;
      }
    }

    // Obtener las reglas de servicio para proyectar
    const rules = await this.prisma.serviceRule.findMany({
      include: { icon: true },
    });

    // 2 y 3. Fórmulas por cada regla de servicio
    const predictions = rules.map((rule) => {
      // Buscar último servicio de este tipo
      const lastService = vehicle.serviceRecords
        .filter((record) => record.service?.serviceName === rule.serviceName)
        .sort((a, b) => b.mileage - a.mileage)[0];

      const kmLastService = lastService
        ? lastService.mileage
        : vehicle.initialMileage;
      const kmSinceLastService = vehicle.currentMileage - kmLastService;

      // Salud = 100 - ((Km Actual - Km Ultimo Servicio) / Intervalo * 100)
      let healthPercentage =
        100 - (kmSinceLastService / rule.frequencyKm) * 100;
      healthPercentage = Math.max(0, Math.min(100, healthPercentage)); // Limitar 0-100

      const kmRemaining = rule.frequencyKm - kmSinceLastService;
      const daysRemaining = kmRemaining > 0 ? kmRemaining / averageKmPerDay : 0;

      return {
        serviceName: rule.serviceName,
        icon: rule.icon,
        healthPercentage: Math.round(healthPercentage),
        kmRemaining: Math.max(0, kmRemaining),
        daysRemaining: Math.round(daysRemaining),
        estimatedDate: new Date(Date.now() + daysRemaining * 24 * 3600 * 1000),
      };
    });

    return {
      vehicleId,
      currentMileage: vehicle.currentMileage,
      averageKmPerDay: Math.round(averageKmPerDay * 10) / 10,
      predictions,
    };
  }
}
