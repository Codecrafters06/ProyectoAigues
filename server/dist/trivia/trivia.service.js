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
exports.TriviaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const trivia_schema_1 = require("./schemas/trivia.schema");
let TriviaService = class TriviaService {
    constructor(triviaModel) {
        this.triviaModel = triviaModel;
    }
    async findAll() {
        return await this.triviaModel.find().exec();
    }
    async findOne(id) {
        const trivia = await this.triviaModel.findOne({ id }).exec();
        if (!trivia) {
            throw new common_1.NotFoundException('Trivia no encontrada');
        }
        return trivia;
    }
    async create(trivia) {
        const newTrivia = new this.triviaModel(trivia);
        return newTrivia.save();
    }
    async update(id, trivia) {
        const updateTrivia = await this.triviaModel
            .findByIdAndUpdate(id, trivia, { new: true })
            .exec();
        if (!updateTrivia) {
            throw new common_1.NotFoundException('Trivia actualizada');
        }
        return updateTrivia;
    }
    async delete(id) {
        const deletedTrivia = await this.triviaModel.findByIdAndDelete(id).exec();
        if (!deletedTrivia) {
            throw new common_1.NotFoundException('Trivia eliminada');
        }
        return deletedTrivia;
    }
};
exports.TriviaService = TriviaService;
exports.TriviaService = TriviaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(trivia_schema_1.Trivia.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], TriviaService);
//# sourceMappingURL=trivia.service.js.map