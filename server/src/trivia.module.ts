// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { PersonajesController } from './personajes/personajes.controller';
// import { PersonajesService } from './personajes/personajes.service';
// import { EscenariosController } from './escenarios/escenarios.controller';
// import { EscenariosService } from './escenarios/escenarios.service';
// import { PreguntasController } from './preguntas/preguntas.controller';
// import { PreguntasService } from './preguntas/preguntas.service';
// import { PersonajesSchema } from './personajes/schemas/personajes.schema';
// import { EscenarioSchema } from './escenarios/schemas/escenarios.schema';
// import { PreguntaSchema } from './preguntas/schemas/preguntas.schema'; // Add the corresponding type declaration

// @Module({
//     imports: [
//         MongooseModule.forFeature([
//             { name: 'Personaje', schema: PersonajesSchema },
//             { name: 'Escenario', schema: EscenarioSchema },
//             { name: 'Pregunta', schema: PreguntaSchema },

//         ]),
//     ],
//     controllers: [PersonajesController, EscenariosController, PreguntasController],
//     providers: [PersonajesService, EscenariosService, PreguntasService],
// })
// export class TriviaModule {}
