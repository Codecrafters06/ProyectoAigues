import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Trivia, TriviaDocument } from './schemas/trivia.schema';

@Injectable()
export class TriviaService {
    constructor(
        @InjectModel(Trivia.name) private triviaModel: Model<TriviaDocument>, 
    ) {}

    async findAll(): Promise<Trivia[]> {
        return await this.triviaModel.find().exec();
    }

    async findOne(id: string): Promise<Trivia> {
        const trivia = await this.triviaModel.findById(id).exec();
        if (!trivia) {
            throw new NotFoundException('Trivia não encontrada');
        }
        return trivia;
    }}