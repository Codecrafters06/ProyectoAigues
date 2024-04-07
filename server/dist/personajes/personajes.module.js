"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonajesModule = void 0;
const common_1 = require("@nestjs/common");
const personajes_controller_1 = require("./personajes.controller");
const personajes_service_1 = require("./personajes.service");
const mongoose_1 = require("@nestjs/mongoose");
const personajes_schema_1 = require("./schemas/personajes.schema");
let PersonajesModule = class PersonajesModule {
};
exports.PersonajesModule = PersonajesModule;
exports.PersonajesModule = PersonajesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Personajes', schema: personajes_schema_1.PersonajesSchema },
            ]),
        ],
        controllers: [personajes_controller_1.PersonajesController],
        providers: [personajes_service_1.PersonajesService],
    })
], PersonajesModule);
//# sourceMappingURL=personajes.module.js.map