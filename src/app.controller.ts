import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  @Post('cadastrarUrl')
  async cadastrarUrl(@Body('originalUrl') originalUrl: string) {
    return { receivedUrl: originalUrl };
  }
}
