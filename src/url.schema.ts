import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Url extends Document {
  @Prop()
  urlcode: string;

  @Prop()
  originalUrl: string;

  @Prop()
  shortenUrl: string;
}

export const UrlSchema = SchemaFactory.createForClass(Url);