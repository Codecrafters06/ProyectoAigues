import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { personajes, PersonajeDocument } from './schemas/personajes.schema'; // Import the missing module and its corresponding type declarations.

@Injectable()
export class PersonajesService {
    constructor(@InjectModel('Personaje') private readonly personajeModel: Model<PersonajeDocument>) {}

    async getAllPersonajes(): Promise<personajes[]> {
        return await this.personajeModel.find().exec();
    }
}

