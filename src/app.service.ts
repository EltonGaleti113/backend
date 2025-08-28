import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { nanoid } from 'nanoid';
import { Url, UrlDocument } from './url.schema';
import { Model } from 'mongoose';
@Injectable()
export class AppService {
  constructor(@InjectModel(Url.name) private urlModel: Model<UrlDocument>) {}
  generateShortUrl(): string {
    const shortUrl = nanoid(6);
    return shortUrl;
  }

  dbRegistry(originalUrl: string, shortenUrl: string) {
    const urlCode = shortenUrl.split('/').pop();
    const created = new this.urlModel({
      urlCode: this.generateShortUrl(),
      originalUrl: originalUrl,
      shortenUrl: shortenUrl,
    });
    return created.save();
  }
}
