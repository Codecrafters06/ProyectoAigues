import { PreguntasService } from './preguntas.service';
import { Pregunta } from './schemas/preguntas.schema';
export declare class PreguntasController {
    private readonly preguntasService;
    constructor(preguntasService: PreguntasService);
    getAllPreguntas(): Promise<Pregunta[]>;
    getPreguntasByEscenarioId(escenarioId: string): Promise<Pregunta[]>;
}
