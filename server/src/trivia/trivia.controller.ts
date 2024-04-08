import {
  Controller,
  Get,
  Param,
  NotFoundException,
  Res,
  HttpStatus,
  Delete,
  Post,
  Body,
  Put,
} from '@nestjs/common';
import { TriviaService } from './trivia.service';
import { Trivia } from './schemas/trivia.schema';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger'

@ApiTags('Trivia')

@Controller('trivia')
export class TriviaController {
  constructor(private readonly triviaService: TriviaService) {}

  @ApiOperation({ summary: 'Buscar todas las trivias' })
  @Get()
  @ApiResponse({ status: 200, description: 'Listado de todas las trivias.', type: [Trivia]})
  @ApiResponse({ status: 400, description: 'Error de solicitación inválida.' })
  @ApiResponse({ status: 404, description: 'Recurso no encontrado.' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.Contacte al equipo de desarrollo para obtener asistencia adicional.' })

  async findAll(@Res() response) {
    try {
      const allTrivia = await this.triviaService.findAll();
      response.status(HttpStatus.OK).json({
        data: allTrivia,
      });
    } catch (error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error al obtener trivia',
        error: error.message,
      });
    }
  }

  @ApiOperation({ summary: 'Buscar la trivia por su ID' })
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Trivia encontrada.', type: [Trivia]})
  @ApiResponse({ status: 400, description: 'Error de solicitacion inválida.' })
  @ApiResponse({ status: 404, description: 'Recurso no encontrado.' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.Contacte al equipo de desarrollo para obtener asistencia adicional.' })

  async findOne(@Param('id') id: string, @Res() response) {
    try {
      const trivia = await this.triviaService.findOne(id);
      response.status(HttpStatus.OK).json({
        message: 'Trivia encontrada',
        data: trivia,
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.NOT_FOUND).json({
          message: error.message,
        });
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Error al obtener trivia',
          error: error.message,
        });
      }
    }
  }

  @ApiOperation({ summary: 'Crear una nueva trivia'})
  @Post()
  @ApiResponse({ status: 201, description: 'Trivia creado con éxito.', type: Trivia})
  @ApiResponse({ status: 500, description: 'Error interno del servidor. Contacte al equipo de desarrollo para obtener asistencia adicional.'})

  async create(@Body() trivia: Trivia, @Res() response) {
    try {
      const newTrivia = await this.triviaService.create(trivia);
      response.status(HttpStatus.CREATED).json({
        message: 'Trivia creada con exito',
        data: newTrivia,
      });
    } catch (error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error al crear trivia',
        error: error.message,
      });
    }
  }

  @ApiOperation({ summary: 'Actualizar una trivia existente por su ID'})
  @Put(':id')
  @ApiResponse({ status: 200, description: 'Trivia actualizada con éxito.', type: Trivia })
  @ApiResponse({ status: 404, description: 'Trivia no encontrada.'})
  @ApiResponse({ status: 500, description: 'Error interno del servidor. Contacte al equipo de desarrollo para obtener asistencia adicional.'})

  async update(
    @Param(':id') id: string,
    @Body() trivia: Trivia,
    @Res() response,
  ) {
    try {
      const updateTrivia = await this.triviaService.update(id, trivia);
      response.status(HttpStatus.OK).json({
        message: 'Trivia actualizada con exito',
        data: updateTrivia,
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.NOT_FOUND).json({
          message: error.message,
        });
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Error al actualizar trivia',
          error: error.message,
        });
      }
    }
  }

  @ApiOperation({ summary: 'Eliminar una trivia existente por su ID' })
  @Delete(':id')
  @ApiResponse({  status: 200, description: 'Trivia eliminada con éxito.' })
  @ApiResponse({ status: 404, description: 'Trivia no encontrada.' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor. Contacte al equipo de desarrollo para obtener asistencia adicional.' })
  
  async delete(@Param('id') id: string, @Res() response) {
    try {
      const deletedTrivia = await this.triviaService.delete(id);
      response.status(HttpStatus.OK).json({
        message: 'Trivia eliminada con exito',
        data: deletedTrivia,
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Error al eliminar trivia',
          error: error.message,
        });
      }
    }
  }
}
