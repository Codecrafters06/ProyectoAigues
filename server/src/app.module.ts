import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PreguntasModule } from './preguntas/preguntas.module'; // Fixed the file path for the import statement
import { MongooseModule } from '@nestjs/mongoose';
import { EscenariosModule } from './escenarios/escenarios.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TriviaModule } from './trivia/trivia.module';
import { PersonajesModule } from './personajes/personajes.module'; // Added the missing import statement

@Module({
  imports: [PreguntasModule, MongooseModule.forRoot('mongodb+srv://aiguesfactoria:gntobYwYmvM2ISYe@cluster0.tvvzq92.mongodb.net/Aigues'), EscenariosModule, UsuariosModule, PersonajesModule, TriviaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}