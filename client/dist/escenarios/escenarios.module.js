"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscenariosModule = void 0;
const common_1 = require("@nestjs/common");
const escenarios_controller_1 = require("./escenarios.controller");
const escenarios_service_1 = require("./escenarios.service");
const mongoose_1 = require("@nestjs/mongoose");
const escenarios_schema_1 = require("./schemas/escenarios.schema");
let EscenariosModule = class EscenariosModule {
};
exports.EscenariosModule = EscenariosModule;
exports.EscenariosModule = EscenariosModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Escenario', schema: escenarios_schema_1.EscenarioSchema }]),
        ],
        controllers: [escenarios_controller_1.EscenariosController],
        providers: [escenarios_service_1.EscenariosService],
    })
], EscenariosModule);
//# sourceMappingURL=escenarios.module.js.map