import { Controller, Get, Param, NotFoundException, Res, HttpStatus } from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { Trivia } from './schemas/trivia.schema';

@Controller('trivia')
export class TriviaController {
  constructor(private readonly triviaService: TriviaService) {}

  @Get()
  async findAll(@Res() response) {
    try{
      const allTrivia = await this.triviaService.findAll();
      response.status(HttpStatus.OK).json
      ({
        data:allTrivia
      });
   }catch (error) {
    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      message: 'Error al obtener trivia',
      error: error.message
    });
  }
  }

  @Get(':id')
  async findOne(@Param('id') id: string,@Res() response) {
    try {
    const trivia = await this.triviaService.findOne(id);
    response.status(HttpStatus.OK).json
    ({
      message: 'Trivia encontrada',
      data: trivia
    });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.NOT_FOUND).json({
          message: error.message
        });
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Erro al obtener trivia',
          error: error.message
        });
    }
  }
  }}
