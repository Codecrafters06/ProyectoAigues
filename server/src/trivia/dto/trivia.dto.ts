export class TriviaDto {
    id: string;
    nombre: string;
    preguntas: {
        pregunta: string;
        respuestas: {
            respuesta_correcta: string;
            respuesta_incorrecta: string[];
        };
    }[];
}
