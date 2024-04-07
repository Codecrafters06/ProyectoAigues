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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreguntaSchema = exports.Pregunta = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Pregunta = class Pregunta {
};
exports.Pregunta = Pregunta;
__decorate([
    (0, mongoose_1.Prop)({ unique: true, required: true }),
    __metadata("design:type", String)
], Pregunta.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Pregunta.prototype, "pregunta", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String] }),
    __metadata("design:type", Object)
], Pregunta.prototype, "respuestas", void 0);
exports.Pregunta = Pregunta = __decorate([
    (0, mongoose_1.Schema)()
], Pregunta);
exports.PreguntaSchema = mongoose_1.SchemaFactory.createForClass(Pregunta);
//# sourceMappingURL=preguntas.schema.js.map