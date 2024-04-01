import { Controller, Get, Param, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { PersonajesService } from './personajes.service';
import { Personajes } from './schemas/personajes.schema';
@Controller('personajes')
export class PersonajesController {
  constructor(private readonly personajesService: PersonajesService) {}
  @Get()
  async findAll(@Res() response) {
    try {
      const allPersonajes = await this.personajesService.findAll();
      response.status(HttpStatus.OK).json({
        data: allPersonajes
      });
    } catch (error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Erro ao obter personajes',
        error: error.message
      });
    }
  }
  @Get(':id')
  async findOne(@Res() response, @Param('id') id: string) {
    try {
      const personajes = await this.personajesService.findOne(id);
      response.status(HttpStatus.OK).json({
        message: 'Personaje encontrado',
        data: personajes
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.NOT_FOUND).json({
          message: error.message
        });
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Erro al obtener personaje',
          error: error.message
        });
      }
    }
  }
}