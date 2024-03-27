
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Escenario, EscenarioDocument } from './schemas/escenarios.schema'; // Import the missing module and its corresponding type declarations

@Injectable()
export class EscenariosService {
    constructor(@InjectModel('Escenario') private readonly escenarioModel: Model<EscenarioDocument>) {}

    async getAllEscenarios(): Promise<Escenario[]> {
        return await this.escenarioModel.find().exec();
    }
}

