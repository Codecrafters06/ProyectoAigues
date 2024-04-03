import { Controller, Get, Param, NotFoundException, Res, HttpStatus, Delete, Post, Body, Put } from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { Trivia } from './schemas/trivia.schema';

@Controller('trivia')
export class TriviaController {
  constructor(private readonly triviaService: TriviaService) {}

  @Get()
  async findAll(@Res() response) {
    try {
      const allTrivia = await this.triviaService.findAll();
      response.status(HttpStatus.OK).json({
        data: allTrivia
      });
    } catch (error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error al obtener trivia',
        error: error.message
      });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response) {
    try {
      const trivia = await this.triviaService.findOne(id);
      response.status(HttpStatus.OK).json({
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
  }

  @Post()
  async create(@Body() trivia: Trivia, @Res() response) {
    try {
      const newTrivia = await this.triviaService.create(trivia);
      response.status(HttpStatus.CREATED).json({
        message: 'Trivia creada con exito',
        data: newTrivia
      });
    } catch (error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error al crear trivia',
        error: error.message
      });
    }
  }

  @Put(':id')
  async update(@Param(':id') id: string, @Body() trivia: Trivia, @Res() response) {
    try {
      const updateTrivia = await this.triviaService.update(id, trivia);
      response.status(HttpStatus.OK).json({
        message: 'Trivia actualizada con exito',
        data: updateTrivia
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.NOT_FOUND).json({
          message: error.message
        });
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Error al actualizar trivia',
          error: error.message
        });
      }
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: string, @Res() response) {
    try {
      const deletedTrivia = await this.triviaService.delete(id);
      response.status(HttpStatus.OK).json({
        message: 'Trivia borrada con exito',
        data: deletedTrivia
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Error al borrar trivia',
          error: error.message
        });
      }
    }
  }
}
