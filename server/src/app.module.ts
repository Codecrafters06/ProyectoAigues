import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreguntasModule } from './preguntas/preguntas.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EscenariosModule } from './escenarios/escenarios.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TriviaModule } from './trivia/trivia.module';
import { PersonajesModule } from './personajes/personajes.module';
import {ConfigModule} from '@nestjs/config'
import { ModuleRef } from '@nestjs/core';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PreguntasModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}.tvvzq92.mongodb.net/${process.env.MONGODB_DATABASE}`,
    ),
    EscenariosModule,
    UsuariosModule,
    PersonajesModule,
    TriviaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
