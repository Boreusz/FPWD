import { Get, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class CurrencyService implements OnApplicationBootstrap {
  currency_rate = 'empty';
  async onApplicationBootstrap() {
    this.handleCron();
  }

  @Cron('1 * * * * *')
  async handleCron() {
    const data = await fetch(
      'https://ldktuanhf9.execute-api.eu-central-1.amazonaws.com/api',
      {
        method: 'GET',
        headers: {
          'x-api-key': 'DInGz8W0Wr8t0fYAY21ddL2JMmZ2uHT1hxAxUSTa',
        },
      },
    );
    const json = await data.json();
    this.currency_rate = json;
  }

  getCurrency(): string {
    return this.currency_rate;
  }
}
