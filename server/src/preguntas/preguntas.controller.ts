import { Controller, Get, Param } from '@nestjs/common';
import { PreguntasService } from './preguntas.service';
import { Pregunta } from './schemas/preguntas.schema';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger'

@ApiTags('Preguntas')

@Controller('preguntas')
export class PreguntasController {
  constructor(private readonly preguntasService: PreguntasService) {}

  @ApiOperation({ summary: 'Buscar todas las preguntas' })
  @Get()
  @ApiResponse({ status: 200, description: 'Listado de todas las preguntas.', type: [Pregunta]})
  @ApiResponse({ status: 400, description: 'Erro de solicitação inválida.' })
  @ApiResponse({ status: 404, description: 'Recurso não encontrado.' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor.Contacte al equipo de desarrollo para obtener asistencia adicional.' })

  async getAllPreguntas(): Promise<Pregunta[]> {
    return this.preguntasService.getAllPreguntas();
  }
  
  @ApiOperation({ summary: 'Buscar preguntas por ID' })
  @Get(':escenarioId')
  @ApiResponse({ status: 200, description: 'Pregunta encontrada.', type: [Pregunta]})
  @ApiResponse({ status: 400, description: 'Erro de solicitação inválida.' })
  @ApiResponse({ status: 404, description: 'Recurso não encontrado.' })
  @ApiResponse({ status: 500, description: 'Erro interno do servidor.Contacte al equipo de desarrollo para obtener asistencia adicional.' })

  async getPreguntasByEscenarioId(
    @Param('escenarioId') escenarioId: string,
  ): Promise<Pregunta[]> {
    return this.preguntasService.getPreguntasByEscenarioId(escenarioId);
  }
}
