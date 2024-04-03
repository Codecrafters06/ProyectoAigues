import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TriviaDocument = Trivia & Document;

@Schema({ collection: 'trivia' }) 
export class Trivia {
    @Prop({ required: true })
    id: number;

    @Prop({ required: true })
    nombre: string;

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
