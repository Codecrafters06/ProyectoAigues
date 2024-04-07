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
exports.TriviaController = void 0;
const common_1 = require("@nestjs/common");
const trivia_service_1 = require("./trivia.service");
const trivia_schema_1 = require("./schemas/trivia.schema");
let TriviaController = class TriviaController {
    constructor(triviaService) {
        this.triviaService = triviaService;
    }
    async findAll(response) {
        try {
            const allTrivia = await this.triviaService.findAll();
            response.status(common_1.HttpStatus.OK).json({
                data: allTrivia,
            });
        }
        catch (error) {
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error al obtener trivia',
                error: error.message,
            });
        }
    }
    async findOne(id, response) {
        try {
            const trivia = await this.triviaService.findOne(id);
            response.status(common_1.HttpStatus.OK).json({
                message: 'Trivia encontrada',
                data: trivia,
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
                    message: 'Erro al obtener trivia',
                    error: error.message,
                });
            }
        }
    }
    async create(trivia, response) {
        try {
            const newTrivia = await this.triviaService.create(trivia);
            response.status(common_1.HttpStatus.CREATED).json({
                message: 'Trivia creada con exito',
                data: newTrivia,
            });
        }
        catch (error) {
            response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                message: 'Error al crear trivia',
                error: error.message,
            });
        }
    }
    async update(id, trivia, response) {
        try {
            const updateTrivia = await this.triviaService.update(id, trivia);
            response.status(common_1.HttpStatus.OK).json({
                message: 'Trivia actualizada con exito',
                data: updateTrivia,
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
                    message: 'Error al actualizar trivia',
                    error: error.message,
                });
            }
        }
    }
    async delete(id, response) {
        try {
            const deletedTrivia = await this.triviaService.delete(id);
            response.status(common_1.HttpStatus.OK).json({
                message: 'Trivia borrada con exito',
                data: deletedTrivia,
            });
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                response.status(common_1.HttpStatus.INTERNAL_SERVER_ERROR).json({
                    message: 'Error al borrar trivia',
                    error: error.message,
                });
            }
        }
    }
};
exports.TriviaController = TriviaController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TriviaController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TriviaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [trivia_schema_1.Trivia, Object]),
    __metadata("design:returntype", Promise)
], TriviaController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)(':id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, trivia_schema_1.Trivia, Object]),
    __metadata("design:returntype", Promise)
], TriviaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TriviaController.prototype, "delete", null);
exports.TriviaController = TriviaController = __decorate([
    (0, common_1.Controller)('trivia'),
    __metadata("design:paramtypes", [trivia_service_1.TriviaService])
], TriviaController);
//# sourceMappingURL=trivia.controller.js.map