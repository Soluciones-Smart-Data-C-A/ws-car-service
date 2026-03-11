import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { method, originalUrl, body } = request;

    // Limpiar un poco el body si tiene contraseñas u otra info sensible (opcional pero recomendado)
    const safeBody = { ...body };
    if (safeBody.password) {
      safeBody.password = '[HIDDEN]';
    }

    // Se ejecuta al recibir la petición
    this.logger.log(
      `[REQ] ${method} ${originalUrl} - Body: ${JSON.stringify(safeBody)}`,
    );

    // Interceptar cuando termina la respuesta para ver el status code también (opcional)
    response.on('finish', () => {
      const { statusCode } = response;
      this.logger.log(`[RES] ${method} ${originalUrl} ${statusCode}`);
    });

    next();
  }
}
