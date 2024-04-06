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
        const trivia = await this.triviaModel.findOne({id}).exec();
        if (!trivia) {
            throw new NotFoundException('Trivia no encontrada');
        }
        return trivia;
    }

  async create(trivia: Trivia): Promise<Trivia> {
    const newTrivia = new this.triviaModel(trivia);
    return newTrivia.save();
  }

  async update(id: string, trivia: Trivia): Promise<Trivia> {
    const updateTrivia = await this.triviaModel
      .findByIdAndUpdate(id, trivia, { new: true })
      .exec();
    if (!updateTrivia) {
      throw new NotFoundException('Trivia actualizada');
    }
    return updateTrivia;
  }

  async delete(id: string): Promise<Trivia> {
    const deletedTrivia = await this.triviaModel.findByIdAndDelete(id).exec();
    if (!deletedTrivia) {
      throw new NotFoundException('Trivia eliminada');
    }
    return deletedTrivia;
  }
}
