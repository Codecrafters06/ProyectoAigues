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
exports.EscenariosController = void 0;
const common_1 = require("@nestjs/common");
const escenarios_service_1 = require("./escenarios.service");
const swagger_1 = require("@nestjs/swagger");
const escenarios_schema_1 = require("./schemas/escenarios.schema");
let EscenariosController = class EscenariosController {
    constructor(escenariosService) {
        this.escenariosService = escenariosService;
    }
    async findAll(response) {
        try {
            const allEscenarios = await this.escenariosService.findAllEscenarios();
            response.status(common_1.HttpStatus.OK).json({
                data: allEscenarios,
            });
        }
        catch (error) {
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error al obtener escenarios',
                error: error.message,
            });
        }
    }
    async findOne(id, response) {
        try {
            const escenarios = await this.escenariosService.findOne(id);
            response.status(common_1.HttpStatus.OK).json({
                message: 'Escenario encontrado',
                data: escenarios,
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
                    message: 'Error al obtener escenario',
                    error: error.message,
                });
            }
        }
    }
};
exports.EscenariosController = EscenariosController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar todos los escenarios' }),
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Listado de todos los escenarios.', type: [escenarios_schema_1.Escenario] }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Erro de solicitação inválida.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Recurso não encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Erro interno do servidor.Contacte al equipo de desarrollo para obtener asistencia adicional.' }),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], EscenariosController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar el escenario por su ID' }),
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Escenario encontrado.', type: escenarios_schema_1.Escenario }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Error de solicitud inválida.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Recurso no encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error interno del servidor. Contacte al equipo de desarrollo para obtener asistencia adicional.' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EscenariosController.prototype, "findOne", null);
exports.EscenariosController = EscenariosController = __decorate([
    (0, swagger_1.ApiTags)('Escenarios'),
    (0, common_1.Controller)('Escenarios'),
    __metadata("design:paramtypes", [escenarios_service_1.EscenariosService])
], EscenariosController);
//# sourceMappingURL=escenarios.controller.js.map