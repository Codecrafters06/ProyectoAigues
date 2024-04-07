import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger'

export type PersonajeDocument = Personajes & Document;

@Schema()
export class Personajes {
  @ApiProperty()
  @Prop({ required: true })
  id: string;
  @ApiProperty()
  @Prop({ required: true })
  name: string;
  @ApiProperty()
  @Prop({ required: true })
  avatar: string;
  @ApiProperty()
  @Prop({ required: true })
  description: string;
}

export const PersonajesSchema = SchemaFactory.createForClass(Personajes);
