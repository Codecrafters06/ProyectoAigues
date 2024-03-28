import { Module } from '@nestjs/common';
import { PersonajesController } from './personajes.controller';
import { PersonajesService } from './personajes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonajesSchema } from './schemas/personajes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'personajes', schema: PersonajesSchema }]),
  ],
  controllers: [PersonajesController],
  providers: [PersonajesService]
})
export class PersonajesModule {}