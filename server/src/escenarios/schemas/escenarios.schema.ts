import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger'

export type EscenarioDocument = Escenario & Document;

@Schema()
export class Escenario {
  @ApiProperty()
  @Prop()
  id: string;
  @ApiProperty()
  @Prop()
  name: string;
  @ApiProperty()
  @Prop()
  description: string;
}

export const EscenarioSchema = SchemaFactory.createForClass(Escenario);
