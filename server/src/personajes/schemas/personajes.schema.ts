import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PersonajeDocument = Personajes & Document;

@Schema()
export class Personajes {
  @Prop({ required: true})
  id: string;

  @Prop({ required: true})
  name: string;

  @Prop({ required: true})
  avatar: string;

  @Prop({ required: true})
  description: string;

}

export const PersonajesSchema = SchemaFactory.createForClass(Personajes);