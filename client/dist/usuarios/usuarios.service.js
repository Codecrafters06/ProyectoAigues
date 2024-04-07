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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const usuarios_schema_1 = require("./schemas/usuarios.schema");
const mongoose_2 = require("@nestjs/mongoose");
let UsuariosService = class UsuariosService {
    constructor(usuarioModel) {
        this.usuarioModel = usuarioModel;
    }
    async findAll() {
        return this.usuarioModel.find().exec();
    }
    async findOne(id) {
        const user = await this.usuarioModel.findById(id).exec();
        if (!user) {
            throw new common_1.NotFoundException('Usuário no encontrado');
        }
        return user;
    }
    async create(usuario) {
        const newUser = new this.usuarioModel(usuario);
        return newUser.save();
    }
    async update(id, usuario) {
        const updatedUser = await this.usuarioModel
            .findByIdAndUpdate(id, usuario, { new: true })
            .exec();
        if (!updatedUser) {
            throw new common_1.NotFoundException('Usuário no encontrado');
        }
        return updatedUser;
    }
    async delete(id) {
        const deletedUser = await this.usuarioModel.findByIdAndDelete(id).exec();
        if (!deletedUser) {
            throw new common_1.NotFoundException('Usuário no encontrado');
        }
        return deletedUser;
    }
};
exports.UsuariosService = UsuariosService;
exports.UsuariosService = UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(usuarios_schema_1.Usuarios.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], UsuariosService);
//# sourceMappingURL=usuarios.service.js.map