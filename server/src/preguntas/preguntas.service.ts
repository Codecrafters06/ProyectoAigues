import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PreguntaDocument, Pregunta } from './schemas/preguntas.schema';

@Injectable()
export class PreguntasService {
  constructor(
    @InjectModel('Pregunta')
    private readonly preguntaModel: Model<PreguntaDocument>,
  ) {}

  async getAllPreguntas(): Promise<Pregunta[]> {
    return await this.preguntaModel.find().exec();
  }

  async getPreguntasByEscenarioId(escenarioId: string): Promise<Pregunta[]> {
    return await this.preguntaModel.find({ escenarioId }).exec();
  }
}
