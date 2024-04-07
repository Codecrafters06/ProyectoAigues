import {
  Controller,
  Get,
  Res,
  HttpStatus,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { EscenariosService } from './escenarios.service';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger'
import { Escenario } from './schemas/escenarios.schema';

@ApiTags('Escenarios')
@Controller('Escenarios')
export class EscenariosController {
constructor(private readonly escenariosService: EscenariosService) {}

  @ApiOperation({ summary: 'Buscar todos los escenarios' })
  @Get()
  @ApiResponse({ status: 200, description: 'Listado de todos los escenarios.', type: [Escenario]})
  @ApiResponse({ status: 400, description: 'Erro de solicitação inválida.' })
  @ApiResponse({ status: 404, description: 'Recurso não encontrado.' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor.Contacte al equipo de desarrollo para obtener asistencia adicional.' })

  async findAll(@Res() response) {
    try {
      const allEscenarios = await this.escenariosService.findAllEscenarios();
      response.status(HttpStatus.OK).json({
        data: allEscenarios,
      });
    } catch (error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error al obtener escenarios',
        error: error.message,
      });
    }
  }

  @ApiOperation({ summary: 'Buscar el escenario por su ID' })
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Escenario encontrado.', type: Escenario})
  @ApiResponse({ status: 400, description: 'Error de solicitud inválida.' })
  @ApiResponse({ status: 404, description: 'Recurso no encontrado.' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor. Contacte al equipo de desarrollo para obtener asistencia adicional.' })

  async findOne(@Param('id') id: string, @Res() response) {
    try {
      const escenarios = await this.escenariosService.findOne(id);
      response.status(HttpStatus.OK).json({
        message: 'Escenario encontrado',
        data: escenarios,
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.NOT_FOUND).json({
          message: error.message,
        });
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Error al obtener escenario',
          error: error.message,
        });
      }
    }
  }
}
