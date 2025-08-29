import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UrlDocument = Url & Document;

@Schema({ timestamps: true })
export class Url extends Document {
  @Prop({ required: true, unique: true })
  urlCode: string;

  @Prop({ required: true })
  originalUrl: string;

  @Prop({ required: true, unique: true })
  shortenUrl: string;
}

export const UrlSchema = SchemaFactory.createForClass(Url);
