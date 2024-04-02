import { Injectable } from '@nestjs/common';
import { Trivia, TriviaDocument } from './schemas/trivia.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class TriviaService {
    constructor(@InjectModel(Trivia.name) private readonly triviaModel: Model<TriviaDocument>) {}

    async getAllTrivia(): Promise<Trivia[]> {
        return await this.triviaModel.find().exec();

     }}
