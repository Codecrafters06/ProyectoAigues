import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type TriviaDocument = Trivia & Document;

@Schema()
export class Trivia {
    @Prop ({ unique: true, required: true}) 
    id: string;

    @Prop()
    nombre: string;

    @Prop()
    pregunta: string;

    @Prop({ type: [String]})
    repuestas: { 
    correcta: string;
    incorrectas: string[];
};
}
export const TriviaSchema = SchemaFactory.createForClass(Trivia)