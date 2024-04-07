"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosController = void 0;
const common_1 = require("@nestjs/common");
const usuarios_service_1 = require("./usuarios.service");
const usuarios_schema_1 = require("./schemas/usuarios.schema");
const swagger_1 = require("@nestjs/swagger");
let UsuariosController = class UsuariosController {
    constructor(usuariosService) {
        this.usuariosService = usuariosService;
    }
    async findAll(response) {
        try {
            const allUsers = await this.usuariosService.findAll();
            response.status(common_1.HttpStatus.OK).json({
                data: allUsers,
            });
        }
        catch (error) {
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error al obtener usuarios',
                error: error.message,
            });
        }
    }
    async findOne(id, response) {
        try {
            const user = await this.usuariosService.findOne(id);
            response.status(common_1.HttpStatus.OK).json({
                message: 'Usuario encontrado',
                data: user,
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                response.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: error.message,
                });
            }
            else {
                response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                    message: 'Erro al obtener usuário',
                    error: error.message,
                });
            }
        }
    }
    async create(usuario, response) {
        try {
            const newUser = await this.usuariosService.create(usuario);
            response.status(common_1.HttpStatus.CREATED).json({
                message: 'Usuario creado con exito',
                data: newUser,
            });
        }
        catch (error) {
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error al crear usuario',
                error: error.message,
            });
        }
    }
    async update(id, usuario, response) {
        try {
            const updatedUser = await this.usuariosService.update(id, usuario);
            response.status(common_1.HttpStatus.OK).json({
                message: 'Usuário atualizado con exito',
                data: updatedUser,
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                response.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: error.message,
                });
            }
            else {
                response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                    message: 'Error al actualizar usuario',
                    error: error.message,
                });
            }
        }
    }
    async delete(id, response) {
        try {
            const deletedUser = await this.usuariosService.delete(id);
            response.status(common_1.HttpStatus.OK).json({
                message: 'Usuário deletado con exito',
                data: deletedUser,
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                response.status(common_1.HttpStatus.NOT_FOUND).json({
                    message: error.message,
                });
            }
            else {
                response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                    message: 'Error al deletar usuário',
                    error: error.message,
                });
            }
        }
    }
};
exports.UsuariosController = UsuariosController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar todos los usuários' }),
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Listado de todos los usuários.', type: [usuarios_schema_1.Usuarios] }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Erro de solicitação inválida.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Recurso não encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Erro interno do servidor.Contacte al equipo de desarrollo para obtener asistencia adicional.' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar el usuario por su ID' }),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuário encontrado.', type: usuarios_schema_1.Usuarios }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error de solicitud inválida.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Recurso no encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor. Contacte al equipo de desarrollo para obtener asistencia adicional.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Crear una nueva trivia' }),
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'Usuario creado con éxito.', type: usuarios_schema_1.Usuarios }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor. Contacte al equipo de desarrollo para obtener asistencia adicional.' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [usuarios_schema_1.Usuarios, Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Actualizar un usuario existente por su ID' }),
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuario actualizado con éxito.', type: usuarios_schema_1.Usuarios }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuario no encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor. Contacte al equipo de desarrollo para obtener asistencia adicional.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, usuarios_schema_1.Usuarios, Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Eliminar un usuario existente por su ID' }),
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Usuario eliminado con éxito.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Usuario no encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor. Contacte al equipo de desarrollo para obtener asistencia adicional.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsuariosController.prototype, "delete", null);
exports.UsuariosController = UsuariosController = __decorate([
    (0, swagger_1.ApiTags)('Usuarios'),
    (0, common_1.Controller)('usuarios'),
    __metadata("design:paramtypes", [usuarios_service_1.UsuariosService])
], UsuariosController);
//# sourceMappingURL=usuarios.controller.js.map