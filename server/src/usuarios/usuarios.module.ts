import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Usuarios, UsuariosSchema } from './schemas/usuarios.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Usuarios.name,schema: UsuariosSchema }]),
  ],
  controllers: [UsuariosController],
  providers: [UsuariosService],
  exports: [UsuariosService],
})
export class UsuariosModule {}

