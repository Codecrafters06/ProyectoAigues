import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true, required: true}) 
  id: string
  @Prop()
  name: string;
  @Prop()
  lastname: string;
  @Prop()
  password: string;
  @Prop({ type: Object, default: false })
  game: {
    id: number;
    points: number;
    last_question: number;
  };
}

export const UserSchema = SchemaFactory.createForClass(User);