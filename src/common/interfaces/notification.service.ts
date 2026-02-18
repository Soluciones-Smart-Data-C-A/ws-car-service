export interface INotificationService {
    sendOTP(to: string, code: string): Promise<void>;
}