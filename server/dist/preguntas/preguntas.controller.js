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
exports.PreguntasController = void 0;
const common_1 = require("@nestjs/common");
const preguntas_service_1 = require("./preguntas.service");
const preguntas_schema_1 = require("./schemas/preguntas.schema");
const swagger_1 = require("@nestjs/swagger");
let PreguntasController = class PreguntasController {
    constructor(preguntasService) {
        this.preguntasService = preguntasService;
    }
    async getAllPreguntas() {
        return this.preguntasService.getAllPreguntas();
    }
    async getPreguntasByEscenarioId(escenarioId) {
        return this.preguntasService.getPreguntasByEscenarioId(escenarioId);
    }
};
exports.PreguntasController = PreguntasController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar todas las preguntas' }),
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Listado de todas las preguntas.', type: [preguntas_schema_1.Pregunta] }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Erro de solicitação inválida.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Recurso não encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Erro interno do servidor.Contacte al equipo de desarrollo para obtener asistencia adicional.' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PreguntasController.prototype, "getAllPreguntas", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Buscar preguntas por ID' }),
    (0, common_1.Get)(':escenarioId'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Pregunta encontrada.', type: [preguntas_schema_1.Pregunta] }),
    (0, swagger_1.ApiResponse)({ status: 400, description: 'Erro de solicitação inválida.' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Recurso não encontrado.' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Erro interno do servidor.Contacte al equipo de desarrollo para obtener asistencia adicional.' }),
    __param(0, (0, common_1.Param)('escenarioId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PreguntasController.prototype, "getPreguntasByEscenarioId", null);
exports.PreguntasController = PreguntasController = __decorate([
    (0, swagger_1.ApiTags)('Preguntas'),
    (0, common_1.Controller)('preguntas'),
    __metadata("design:paramtypes", [preguntas_service_1.PreguntasService])
], PreguntasController);
//# sourceMappingURL=preguntas.controller.js.map