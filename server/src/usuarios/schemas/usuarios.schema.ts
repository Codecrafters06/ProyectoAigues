import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger'

export type UsuariosDocument = Usuarios & Document;

@Schema()
export class Usuarios {
  @ApiProperty()
  @Prop({ unique: true, required: true })
  id: string;
  @ApiProperty()
  @Prop()
  name: string;
  @ApiProperty()
  @Prop()
  lastname: string;
  @ApiProperty()
  @Prop()
  password: string;
  @ApiProperty()
  @Prop({ type: Object, default: { id: 0, points: 0, last_question: 0 } })
  game: {
    id: number;
    points: number;
    last_question: number;
  };
}

export const UsuariosSchema = SchemaFactory.createForClass(Usuarios);
