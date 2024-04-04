import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  Res,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuarios } from './schemas/usuarios.schema';
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  @Get()
  async findAll(@Res() response) {
    try {
      const allUsers = await this.usuariosService.findAll();
      response.status(HttpStatus.OK).json({
        data: allUsers,
      });
    } catch (error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error al obtener usuarios',
        error: error.message,
      });
    }
  }
  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response) {
    try {
      const user = await this.usuariosService.findOne(id);
      response.status(HttpStatus.OK).json({
        message: 'Usuario encontrado',
        data: user,
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.NOT_FOUND).json({
          message: error.message,
        });
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Erro al obtener usuário',
          error: error.message,
        });
      }
    }
  }
  @Post()
  async create(@Body() usuario: Usuarios, @Res() response) {
    try {
      const newUser = await this.usuariosService.create(usuario);
      response.status(HttpStatus.CREATED).json({
        message: 'Usuario creado con exito',
        data: newUser,
      });
    } catch (error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Error al crear usuario',
        error: error.message,
      });
    }
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() usuario: Usuarios,
    @Res() response,
  ) {
    try {
      const updatedUser = await this.usuariosService.update(id, usuario);
      response.status(HttpStatus.OK).json({
        message: 'Usuário atualizado con exito',
        data: updatedUser,
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.NOT_FOUND).json({
          message: error.message,
        });
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Error al actualizar usuario',
          error: error.message,
        });
      }
    }
  }
  @Delete(':id')
  async delete(@Param('id') id: string, @Res() response) {
    try {
      const deletedUser = await this.usuariosService.delete(id);
      response.status(HttpStatus.OK).json({
        message: 'Usuário deletado con exito',
        data: deletedUser,
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.NOT_FOUND).json({
          message: error.message,
        });
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Error al deletar usuário',
          error: error.message,
        });
      }
    }
  }
}
