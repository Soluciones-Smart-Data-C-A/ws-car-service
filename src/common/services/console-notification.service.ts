import { Injectable } from '@nestjs/common';
import { INotificationService } from '../interfaces/notification.service';

@Injectable()
export class ConsoleNotificationService implements INotificationService {
  async sendOTP(to: string, code: string): Promise<void> {
    console.log('-----------------------------------------');
    console.log(`📱 ENVIANDO OTP A: ${to}`);
    console.log(`🔑 CÓDIGO: ${code}`);
    console.log('-----------------------------------------');
  }
}
