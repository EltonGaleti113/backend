import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
@Injectable()
export class AppService {
  gerarShortUrl(originalUrl): string {
    const shortUrl = nanoid(6);
    return shortUrl;
  }
}
