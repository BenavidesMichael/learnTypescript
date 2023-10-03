import { Driver } from "../interfaces/driver.interface";

export class OracleDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number,
  ) {}

  disconnect(): void {
    console.log(`Disconnecting from Postgres database ${this.database} on port ${this.port}...`);
  }
  isConnected(): boolean {
    return false;
  }

  connect(): void {
    console.log(`Connecting to Postgres database ${this.database} on port ${this.port}...`);
  }
}
