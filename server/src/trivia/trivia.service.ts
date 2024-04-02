import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Trivia, TriviaDocument } from './schemas/trivia.schema';

@Injectable()
export class TriviaService {
    constructor(
        @InjectModel('trivia') private triviaModel: Model<TriviaDocument>, 
    ) {}

    async getAll(): Promise<Trivia[]> {
        return this.triviaModel.find().exec();
    }

    async getById(id: string): Promise<Trivia> {
        const trivia = await this.triviaModel.findOne({ id }).exec();
        if (!trivia) {
            throw new NotFoundException('Trivia não encontrada');
        }
        return trivia;
    }}