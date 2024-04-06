import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger'

export type TriviaDocument = Trivia & Document;

@Schema({ collection: 'trivia' })
export class Trivia {
  @ApiProperty()
  @Prop({ required: true })
  id: number;
  @ApiProperty()
  @Prop({ required: true })
  nombre: string;
  @ApiProperty()
  @Prop()
  preguntas: {
    indice(indice: any): unknown;
    pregunta: string;
    respuestas: {
      correcta: string;
      incorrectas: string[];
    };
  }[];
}

export const TriviaSchema = SchemaFactory.createForClass(Trivia);
