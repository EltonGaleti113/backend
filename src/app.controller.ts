import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post('cadastrar-url')
  async cadastrarUrl(@Body('originalUrl') originalUrl: string) {
    const shortUrl = await this.appService.gerarShortUrl(originalUrl);
    return {
      receivedUrl: originalUrl,
      shortenUrl: `localhost:3000/${shortUrl}`,
    };
  }
}
