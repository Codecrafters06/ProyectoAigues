import { Controller, Get } from '@nestjs/common';
import { EscenariosService } from './escenarios.service';
import { Escenario } from './schemas/escenarios.schema';

@Controller('escenarios')
export class EscenariosController {
  constructor(private readonly escenariosService: EscenariosService) {}

  @Get()
  async getAllEscenarios(): Promise<Escenario[]> {
    return this.escenariosService.getAllEscenarios();
  }
}