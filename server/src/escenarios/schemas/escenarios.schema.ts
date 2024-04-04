import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EscenarioDocument = Escenario & Document;

@Schema()
export class Escenario {
  @Prop()
  id: string;
  @Prop()
  name: string;
  @Prop()
  description: string;
}

export const EscenarioSchema = SchemaFactory.createForClass(Escenario);
