import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger'

export type PreguntaDocument = Pregunta & Document;


@Schema()
export class Pregunta {
  @ApiProperty()
  @Prop({ unique: true, required: true })
  id: string;
  @ApiProperty()
  @Prop()
  pregunta: string;
  @ApiProperty()
  @Prop({ type: [String] })
  respuestas: {
    correcta: string;
    incorrectas: string[];
  };
}

export const PreguntaSchema = SchemaFactory.createForClass(Pregunta);
