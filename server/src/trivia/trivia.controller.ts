import { Controller, Get, Param, NotFoundException } from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { Trivia } from './schemas/trivia.schema';

@Controller('trivia')
export class TriviaController {
  constructor(private readonly triviaService: TriviaService) {}

  @Get()
  async getAll(): Promise<Trivia[]> {
    return this.triviaService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Trivia> {
    try {
      return await this.triviaService.getById(id); 
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      }
      throw error;
    }
  }
}
