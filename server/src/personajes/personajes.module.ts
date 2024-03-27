import { Module } from '@nestjs/common';
import { PersonajesController } from './personajes.controller';
import { PersonajesService } from './personajes.service';

@Module({
  controllers: [PersonajesController],
  providers: [PersonajesService]
})
export class PersonajesModule {}