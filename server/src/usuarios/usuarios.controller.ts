// import { Controller, Get } from '@nestjs/common';
// import { UsuariosService } from './usuarios.service';

// @Controller('usuarios')
// export class UsuariosController {
//   constructor(private readonly usuariosService: UsuariosService) {}

//   @Get()
//   findAll() {
//     return this.usuariosService.findAll();
//   }
// }
// export default UsuariosController;


//---------------------------------------------------------------------------------------------------------------------
// import { Controller, Get, Post, Body, Param, Put, Delete, Res, HttpStatus } from '@nestjs/common';
// import { UsuariosService } from './usuarios.service';
// import { Usuarios } from './schemas/usuarios.schema';

// @Controller('usuarios')
// export class UsuariosController {
//   constructor(private readonly usuariosService: UsuariosService) {}

//   @Get()
//   findAll(@Res() response){
//     const allUsers = this.usuariosService.findAll();
//     response.status(HttpStatus.OK).json({
//       message: 'All users', allUsers
//     })
//     return this.usuariosService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: string) {
//     return this.usuariosService.findOne(id);
//   }

//   @Post()
//   create(@Body() usuario: Usuarios) {
//     return this.usuariosService.create(usuario);
//   }

//   @Put(':id')
//   update(@Param('id') id: string, @Body() usuario: Usuarios) {
//     return this.usuariosService.update(id, usuario);
//   }

//   @Delete(':id')
//   delete(@Param('id') id: string) {
//     return this.usuariosService.delete(id);
//   }
// }

//________________________________________________________________________________________________________

import { Controller, Get, Post, Body, Param, Put, Delete, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuarios } from './schemas/usuarios.schema';
@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}
  @Get()
  async findAll(@Res() response){
    try {
      const allUsers = await this.usuariosService.findAll();
      response.status(HttpStatus.OK).json({
        data: allUsers
      });
    } catch (error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Erro al obtener usuários',
        error: error.message
      });
    }
  }
  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response) {
    try {
      const user = await this.usuariosService.findOne(id);
      response.status(HttpStatus.OK).json({
        message: 'Usuário encontrado',
        data: user
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.NOT_FOUND).json({
          message: error.message
        });
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Erro al obtener usuário',
          error: error.message
        });
      }
    }
  }
  @Post()
  async create(@Body() usuario: Usuarios, @Res() response) {
    try {
      const newUser = await this.usuariosService.create(usuario);
      response.status(HttpStatus.CREATED).json({
        message: 'Usuário creado con exito',
        data: newUser
      });
    } catch (error) {
      response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        message: 'Erro al crear usuário',
        error: error.message
      });
    }
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() usuario: Usuarios, @Res() response) {
    try {
      const updatedUser = await this.usuariosService.update(id, usuario);
      response.status(HttpStatus.OK).json({
        message: 'Usuário atualizado con exito',
        data: updatedUser
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.NOT_FOUND).json({
          message: error.message
        });
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Erro al atualizar usuário',
          error: error.message
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
        data: deletedUser
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.NOT_FOUND).json({
          message: error.message
        });
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Error al deletar usuário',
          error: error.message
        });
      }
    }
  }
}