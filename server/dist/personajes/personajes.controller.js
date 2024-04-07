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
exports.PersonajesController = void 0;
const common_1 = require("@nestjs/common");
const personajes_service_1 = require("./personajes.service");
const personajes_schema_1 = require("./schemas/personajes.schema");
const swagger_1 = require("@nestjs/swagger");
let PersonajesController = class PersonajesController {
    constructor(personajesService) {
        this.personajesService = personajesService;
    }
    async findAll(response) {
        try {
            const allPersonajes = await this.personajesService.findAll();
            response.status(common_1.HttpStatus.OK).json({
                data: allPersonajes,
            });
        }
        catch (error) {
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Erro ao obter personajes',
                error: error.message,
            });
        }
    }
    async findOne(response, id) {
        try {
            const personajes = await this.personajesService.findOne(id);
            response.status(common_1.HttpStatus.OK).json({
                message: 'Personaje encontrado',
                data: personajes,
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
                    message: 'Erro al obtener personaje',
                    error: error.message,
                });
            }
        }
    }
};
exports.PersonajesController = PersonajesController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar todos los personajes' }),
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Listado de todos los usuários.', type: [personajes_schema_1.Personajes] }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Erro de solicitação inválida.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Recurso não encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Erro interno do servidor.Contacte al equipo de desarrollo para obtener asistencia adicional.' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PersonajesController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar el personaje por su ID' }),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Personaje encontrado.', type: personajes_schema_1.Personajes }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error de solicitud inválida.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Recurso no encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor. Contacte al equipo de desarrollo para obtener asistencia adicional.' }),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PersonajesController.prototype, "findOne", null);
exports.PersonajesController = PersonajesController = __decorate([
    (0, swagger_1.ApiTags)('Personajes'),
    (0, common_1.Controller)('personajes'),
    __metadata("design:paramtypes", [personajes_service_1.PersonajesService])
], PersonajesController);
//# sourceMappingURL=personajes.controller.js.map