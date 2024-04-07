"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const preguntas_module_1 = require("./preguntas/preguntas.module");
const mongoose_1 = require("@nestjs/mongoose");
const escenarios_module_1 = require("./escenarios/escenarios.module");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const trivia_module_1 = require("./trivia/trivia.module");
const personajes_module_1 = require("./personajes/personajes.module");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(),
            preguntas_module_1.PreguntasModule,
            mongoose_1.MongooseModule.forRoot(`mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_CLUSTER}.tvvzq92.mongodb.net/${process.env.MONGODB_DATABASE}`),
            escenarios_module_1.EscenariosModule,
            usuarios_module_1.UsuariosModule,
            personajes_module_1.PersonajesModule,
            trivia_module_1.TriviaModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map