import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuarios, UsuariosSchema } from './schemas/usuarios.schema';
import { Trivia, TriviaSchema } from 'src/trivia/schemas/trivia.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Usuarios.name, schema: UsuariosSchema }]),  MongooseModule.forFeature([{ name: Trivia.name, schema: TriviaSchema }]), 
  ],
  
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService]
})
export class UsuariosModule {}

