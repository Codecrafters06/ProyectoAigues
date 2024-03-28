export class PreguntaDto {
  id: string;
  pregunta: string;
  respuestas: {
    correcta: string;
    incorrectas: string[];
  };
}