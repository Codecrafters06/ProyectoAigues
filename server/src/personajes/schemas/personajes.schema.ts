import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PersonajeDocument = personajes & Document;

@Schema()
export class personajes {
  @Prop({ required: true})
  _id: string;

  @Prop({ required: true})
  name: string;

  @Prop({ required: true})
  avatar: string;

  @Prop({ required: true})
  description: string;

}

export const PersonajesSchema = SchemaFactory.createForClass(personajes);