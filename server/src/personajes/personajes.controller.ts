import {
  Controller,
  Get,
  Param,
  Res,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { PersonajesService } from './personajes.service';
import { Personajes } from './schemas/personajes.schema';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger'

@ApiTags('Personajes')
@Controller('personajes')
export class PersonajesController {
  constructor(private readonly personajesService: PersonajesService) {}

  @ApiOperation({ summary: 'Buscar todos los personajes' })
  @Get()
  @ApiResponse({ status: 200, description: 'Listado de todos los usuários.', type: [Personajes]})
  @ApiResponse({ status: 400, description: 'Error de solicitación inválida.' })
  @ApiResponse({ status: 404, description: 'Recurso no encontrado.' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.Contacte al equipo de desarrollo para obtener asistencia adicional.' })

  async findAll(@Res() response) {
    try {
      const allPersonajes = await this.personajesService.findAll();
      response.status(HttpStatus.OK).json({
        data: allPersonajes,
      });
    } catch (error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error al obtener personajes',
        error: error.message,
      });
    }
  }

  @ApiOperation({ summary: 'Buscar el personaje por su ID' })
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Personaje encontrado.', type: Personajes})
  @ApiResponse({ status: 400, description: 'Error de solicitud inválida.' })
  @ApiResponse({ status: 404, description: 'Recurso no encontrado.' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor. Contacte al equipo de desarrollo para obtener asistencia adicional.' })

  async findOne(@Res() response, @Param('id') id: string) {
    try {
      const personajes = await this.personajesService.findOne(id);
      response.status(HttpStatus.OK).json({
        message: 'Personaje encontrado',
        data: personajes,
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.NOT_FOUND).json({
          message: error.message,
        });
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Error al obtener personaje',
          error: error.message,
        });
      }
    }
  }
}
