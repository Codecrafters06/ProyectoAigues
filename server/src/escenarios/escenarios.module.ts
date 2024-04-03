import { Module } from '@nestjs/common';
import { EscenariosController } from './escenarios.controller';
import { EscenariosService } from './escenarios.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EscenarioSchema } from './schemas/escenarios.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Escenario', schema: EscenarioSchema }]),
  ],
  controllers: [EscenariosController],
  providers: [EscenariosService] // Fixed the typo here
})
export class EscenariosModule {}
