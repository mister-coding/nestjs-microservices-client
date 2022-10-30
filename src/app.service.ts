import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('MATH_SERVICE') private client: ClientProxy) { }
  getHello(): string {
    return 'Hello World!';
  }

  async testMath() {
    const pattern = { cmd: 'sum' };
    const payload = [1, 2, 3, 4, 5, 6];
    return await this.client.send<number>(pattern, payload);
  }
}
