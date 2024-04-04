import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PreguntaDocument = Pregunta & Document;

@Schema()
export class Pregunta {
  @Prop({ unique: true, required: true })
  id: string;

  @Prop()
  pregunta: string;

  @Prop({ type: [String] })
  respuestas: {
    correcta: string;
    incorrectas: string[];
  };
}

export const PreguntaSchema = SchemaFactory.createForClass(Pregunta);
