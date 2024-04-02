import { Controller, Get, Param } from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { Trivia } from './schemas/trivia.schema';

@Controller('trivia')
export class TriviaController {
  constructor(private readonly triviaService: TriviaService) {}

  @Get()
  async getAllTrivia(): Promise<Trivia[]> {
    return await this.triviaService.getAllTrivia();
  }
}

