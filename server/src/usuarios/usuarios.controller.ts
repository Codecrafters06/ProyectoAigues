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
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger'

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsuariosController {
constructor(private readonly usuariosService: UsuariosService) {}

  @ApiOperation({ summary: 'Buscar todos los usuários' })
  @Get()
  @ApiResponse({ status: 200, description: 'Listado de todos los usuários.', type: [Usuarios]})
  @ApiResponse({ status: 400, description: 'Error de solicitación inválida.' })
  @ApiResponse({ status: 404, description: 'Recurso no encontrado.' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor.Contacte al equipo de desarrollo para obtener asistencia adicional.' })

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

  @ApiOperation({ summary: 'Buscar el usuario por su ID' })
  @Get(':id')
  @ApiResponse({ status: 200, description: 'Usuário encontrado.', type: Usuarios })
  @ApiResponse({ status: 400, description: 'Error de solicitud inválida.' })
  @ApiResponse({ status: 404, description: 'Recurso no encontrado.' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor. Contacte al equipo de desarrollo para obtener asistencia adicional.' })

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
          message: 'Error al obtener usuário',
          error: error.message,
        });
      }
    }
  }

  @ApiOperation({ summary: 'Crear una nueva trivia'})
  @Post()
  @ApiResponse({ status: 201, description: 'Usuario creado con éxito.', type: Usuarios})
  @ApiResponse({ status: 500, description: 'Error interno del servidor. Contacte al equipo de desarrollo para obtener asistencia adicional.'})

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

  @ApiOperation({ summary: 'Actualizar un usuario existente por su ID'})
  @Put(':id')
  @ApiResponse({ status: 200, description: 'Usuario actualizado con éxito.', type: Usuarios })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.'})
  @ApiResponse({ status: 500, description: 'Error interno del servidor. Contacte al equipo de desarrollo para obtener asistencia adicional.'})
  
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

  @ApiOperation({ summary: 'Eliminar un usuario existente por su ID' })
  @Delete(':id')
  @ApiResponse({  status: 200, description: 'Usuario eliminado con éxito.' })
  @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
  @ApiResponse({ status: 500, description: 'Error interno del servidor. Contacte al equipo de desarrollo para obtener asistencia adicional.' })

  async delete(@Param('id') id: string, @Res() response) {
    try {
      const deletedUser = await this.usuariosService.delete(id);
      response.status(HttpStatus.OK).json({
        message: 'Usuário eliminado con exito',
        data: deletedUser,
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        response.status(HttpStatus.NOT_FOUND).json({
          message: error.message,
        });
      } else {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Error al eliminar usuário',
          error: error.message,
        });
      }
    }
  }
}
