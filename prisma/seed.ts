import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../src/generated/prisma/client';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';

dotenv.config();

const dbUrl = process.env.DATABASE_URL || 'mysql://root@localhost:3306/car_service';
const adapter = new PrismaMariaDb(dbUrl as any);
const prisma = new PrismaClient({ adapter });

async function main() {
    console.log('Seeding Database...');

    // 0. Crear Usuarios y Vehículos
    const adminPassword = await bcrypt.hash('password123', 10);

    console.log('Creando Usuarios...');
    const createdUsers: any[] = [];
    for (let i = 1; i <= 5; i++) {
        const user = await prisma.user.upsert({
            where: { email: `user${i}@example.com` },
            update: {},
            create: {
                username: `user${i}`,
                phone: `+123456780${i}`,
                email: `user${i}@example.com`,
                password: adminPassword,
                isVerified: true
            }
        });
        createdUsers.push(user);
    }

    console.log('Creando Vehículos...');
    const vehiclesData = [
        // User 1
        { make: 'Kia', model: 'Sportage', plate: 'BNW-593', initialMileage: 40000, currentMileage: 45000, lastServiceDate: new Date('2023-10-06'), lastServiceMileage: 40000, userId: createdUsers[0].id },
        { make: 'Nissan', model: 'Rogue', plate: 'XPC-791', initialMileage: 30000, currentMileage: 35000, lastServiceDate: new Date('2024-01-01'), lastServiceMileage: 30000, userId: createdUsers[0].id },
        // User 2
        { make: 'Ford', model: 'Focus', plate: 'JIN-201', initialMileage: 50000, currentMileage: 55000, lastServiceDate: new Date('2024-01-04'), lastServiceMileage: 50000, userId: createdUsers[1].id },
        { make: 'Ford', model: 'Ranger', plate: 'GJR-282', initialMileage: 1000, currentMileage: 5000, lastServiceDate: new Date('2023-12-22'), lastServiceMileage: 1000, userId: createdUsers[1].id },
        // User 3
        { make: 'Hyundai', model: 'Accent', plate: 'JAC-474', initialMileage: 20000, currentMileage: 25000, lastServiceDate: new Date('2024-02-16'), lastServiceMileage: 20000, userId: createdUsers[2].id },
        { make: 'Mazda', model: 'Mazda3', plate: 'MTC-156', initialMileage: 15000, currentMileage: 20000, lastServiceDate: new Date('2023-09-06'), lastServiceMileage: 15000, userId: createdUsers[2].id },
        // User 4
        { make: 'Toyota', model: 'Corolla', plate: 'SAX-276', initialMileage: 5000, currentMileage: 10000, lastServiceDate: new Date('2024-01-25'), lastServiceMileage: 5000, userId: createdUsers[3].id },
        { make: 'Volkswagen', model: 'Jetta', plate: 'OKM-688', initialMileage: 25000, currentMileage: 30000, lastServiceDate: new Date('2023-11-17'), lastServiceMileage: 25000, userId: createdUsers[3].id },
        // User 5
        { make: 'Nissan', model: 'Altima', plate: 'LCX-613', initialMileage: 15000, currentMileage: 20000, lastServiceDate: new Date('2024-02-27'), lastServiceMileage: 15000, userId: createdUsers[4].id },
        { make: 'Nissan', model: 'Frontier', plate: 'MHZ-675', initialMileage: 30000, currentMileage: 35000, lastServiceDate: new Date('2023-09-02'), lastServiceMileage: 30000, userId: createdUsers[4].id },
    ];

    for (const vData of vehiclesData) {
        await prisma.vehicle.upsert({
            where: { plate: vData.plate },
            update: {},
            create: vData
        });
    }

    console.log('Creando Iconos...');    // 1. Array de ServiceIcons (Los íconos solicitados por el Front)
    const iconsData = [
        { name: 'Cambio de Aceite', icon: 'oil_change' },
        { name: 'Cambio de Filtro de Aire', icon: 'air_filter' },
        { name: 'Cambio de Pastillas de Freno', icon: 'brakes' },
        { name: 'Rotación de Llantas', icon: 'tire_rotation' },
        { name: 'Alineación y Balanceo', icon: 'alignment' },
        { name: 'Cambio de Batería', icon: 'battery' },
        { name: 'Cambio de Correa de Distribución', icon: 'timing_belt' },
        { name: 'Lavado y Detallado', icon: 'car_wash' },
        { name: 'Revisión de Frenos', icon: 'brakes' },
        { name: 'Cambio de Bujías', icon: 'engine' },
        { name: 'Revisión de Suspensión', icon: 'suspension' },
    ];

    // Crear o asegurar que existan los Iconos
    for (const ic of iconsData) {
        await prisma.serviceIcon.create({
            data: {
                name: ic.name,
                icon: ic.icon,
            }
        });
    }

    // Mapear los iconos insertados
    const createdIcons = await prisma.serviceIcon.findMany();

    // Función de ayuda para encontrar IconId
    const getIconId = (iconName: string) => {
        return createdIcons.find(i => i.icon === iconName)?.id || createdIcons[0].id;
    };

    // 2. Array de Services Base
    const servicesData = [
        { serviceName: 'Mantenimiento Preventivo 10K', iconId: getIconId('oil_change') },
        { serviceName: 'Mantenimiento Básico Puesta a Punto', iconId: getIconId('engine') },
        { serviceName: 'Cambio de Neumáticos Completos', iconId: getIconId('tire_rotation') }
    ];

    for (const sv of servicesData) {
        await prisma.service.create({
            data: {
                serviceName: sv.serviceName,
                iconId: sv.iconId,
            }
        });
    }

    // 3. Array de Service Rules (Frecuencias de Mantenimiento sugeridas habitualmente)
    const rulesData = [
        { serviceName: 'Cambio de Aceite', frequencyKm: 5000, iconId: getIconId('oil_change') },
        { serviceName: 'Filtro de Aire', frequencyKm: 10000, iconId: getIconId('air_filter') },
        { serviceName: 'Cambio de Bujías', frequencyKm: 40000, iconId: getIconId('engine') },
        { serviceName: 'Alineación y Balanceo', frequencyKm: 10000, iconId: getIconId('alignment') },
        { serviceName: 'Rotación de Llantas', frequencyKm: 10000, iconId: getIconId('tire_rotation') },
        { serviceName: 'Revisión de Frenos', frequencyKm: 20000, iconId: getIconId('brakes') },
        { serviceName: 'Correa de Distribución', frequencyKm: 60000, iconId: getIconId('timing_belt') },
    ];

    for (const rule of rulesData) {
        await prisma.serviceRule.create({
            data: {
                serviceName: rule.serviceName,
                frequencyKm: rule.frequencyKm,
                iconId: rule.iconId,
            }
        });
    }

    console.log('Seeding completed successfully!');
}

main()
    .catch((e) => {
        console.error('Error in seeder:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
