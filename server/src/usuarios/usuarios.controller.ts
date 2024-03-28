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


import { Controller, Get, Post, Body, Param, Put, Delete, Res, HttpStatus } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuarios } from './schemas/usuarios.schema';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Get()
  findAll(@Res() response){
    const allUsers = this.usuariosService.findAll();
    response.status(HttpStatus.OK).json({
      message: 'All users', allUsers
    })
    return this.usuariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuariosService.findOne(id);
  }

  @Post()
  create(@Body() usuario: Usuarios) {
    return this.usuariosService.create(usuario);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() usuario: Usuarios) {
    return this.usuariosService.update(id, usuario);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usuariosService.delete(id);
  }
}