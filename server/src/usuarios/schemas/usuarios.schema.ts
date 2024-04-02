import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { hash } from 'bcrypt';

export type UsuariosDocument = Usuarios & Document;

@Schema()
export class Usuarios {
  @Prop({ unique: true, required: true}) 
  id: string
  @Prop()
  name: string;
  @Prop()
  lastname: string;
  @Prop()
  password: string;
  @Prop({ type: Object, default: { id: 0, points: 0, last_question: 0 }})
  game: {
    id: number;
    points: number;
    last_question: number;
  };
}

export const UsuariosSchema = SchemaFactory.createForClass(Usuarios);


UsuariosSchema.pre('save', async function (next: any) {
  try {
    if (!this.isModified('password')) {
      return next();
    }
    const hashed = await hash(this['password'], 10);
    this['password'] = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});