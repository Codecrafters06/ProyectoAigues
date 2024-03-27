import { Controller, Get } from '@nestjs/common';
import { PersonajesService } from './personajes.service';
import { personajes } from './schemas/personajes.schema';

@Controller('personajes')
export class PersonajesController {
  constructor(private readonly personajesService: PersonajesService) {}

  @Get()
  async getAllPersonajes(): Promise<personajes[]> {
    return this.personajesService.getAllPersonajes();
  }
}