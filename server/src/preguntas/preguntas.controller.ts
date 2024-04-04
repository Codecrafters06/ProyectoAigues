import { Controller, Get, Param } from '@nestjs/common';
import { PreguntasService } from './preguntas.service';
import { Pregunta } from './schemas/preguntas.schema';

@Controller('preguntas')
export class PreguntasController {
  constructor(private readonly preguntasService: PreguntasService) {}

  @Get()
  async getAllPreguntas(): Promise<Pregunta[]> {
    return this.preguntasService.getAllPreguntas();
  }

  @Get(':escenarioId')
  async getPreguntasByEscenarioId(
    @Param('escenarioId') escenarioId: string,
  ): Promise<Pregunta[]> {
    return this.preguntasService.getPreguntasByEscenarioId(escenarioId);
  }
}
