import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Personajes, PersonajeDocument } from './schemas/personajes.schema';
@Injectable()
export class PersonajesService {
  constructor(
    @InjectModel(Personajes.name)
    private readonly personajeModel: Model<PersonajeDocument>,
  ) {}
  async findAll(): Promise<Personajes[]> {
    return this.personajeModel.find().exec();
  }
  async findOne(id: string): Promise<Personajes> {
    const personaje = await this.personajeModel.findById(id).exec();
    if (!personaje) {
      throw new NotFoundException('Personaje no encontrado');
    }
    return personaje;
  }
}
