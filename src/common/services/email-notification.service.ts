import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { INotificationService } from '../interfaces/notification.service';

@Injectable()
export class EmailNotificationService implements INotificationService {
  private transporter: nodemailer.Transporter;
  private readonly logger = new Logger(EmailNotificationService.name);

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'pruebastesting8@gmail.com',
        pass: 'pqqtgczwvtaoxxwj', // trimmed space from the provide pass
      },
    });
  }

  async sendOTP(to: string, code: string): Promise<void> {
    try {
      await this.transporter.sendMail({
        from: '"WS Car Service" <pruebastesting8@gmail.com>',
        to, // list of receivers
        subject: 'Código de Verificación (OTP) - WS Car Service', // Subject line
        text: `Tu código de verificación es: ${code}`, // plain text body
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #333; text-align: center;">Código de Verificación</h2>
            <p style="font-size: 16px; color: #555;">Tu código de verificación (OTP) es:</p>
            <div style="text-align: center; margin: 20px 0;">
              <span style="font-size: 24px; font-weight: bold; background-color: #f4f4f4; padding: 10px 20px; border-radius: 5px; letter-spacing: 5px;">${code}</span>
            </div>
            <p style="font-size: 14px; color: #777; text-align: center;">Este código expirará en 10 minutos.</p>
          </div>
        `, // html body
      });
      this.logger.log(`📧 OTP enviado exitosamente a: ${to}`);
    } catch (error) {
      this.logger.error(`Error enviando OTP a ${to}:`, error);
      throw error;
    }
  }
}
