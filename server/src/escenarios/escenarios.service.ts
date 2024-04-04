import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Escenario, EscenarioDocument } from './schemas/escenarios.schema';

@Injectable()
export class EscenariosService {
  constructor(
    @InjectModel(Escenario.name)
    private readonly escenarioModel: Model<EscenarioDocument>,
  ) {}

  async findAllEscenarios(): Promise<Escenario[]> {
    return await this.escenarioModel.find().exec();
  }
  async findOne(id: string): Promise<Escenario> {
    const user = await this.escenarioModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('Usuário no encontrado');
    }
    return user;
  }
}
