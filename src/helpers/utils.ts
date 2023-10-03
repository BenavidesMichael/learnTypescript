export class Utils {
  static readonly PI = 3.14;

  static getBaseUrl(): string {
    return process.env.NODE_ENV === 'production' ? 'https://www.example.com' : 'http://localhost:3000';
  }
}
