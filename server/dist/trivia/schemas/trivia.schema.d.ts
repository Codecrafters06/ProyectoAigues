/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from 'mongoose';
export type TriviaDocument = Trivia & Document;
export declare class Trivia {
    id: number;
    nombre: string;
    preguntas: {
        indice(indice: any): unknown;
        pregunta: string;
        respuestas: {
            correcta: string;
            incorrectas: string[];
        };
    }[];
}
export declare const TriviaSchema: import("mongoose").Schema<Trivia, import("mongoose").Model<Trivia, any, any, any, Document<unknown, any, Trivia> & Trivia & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Trivia, Document<unknown, {}, import("mongoose").FlatRecord<Trivia>> & import("mongoose").FlatRecord<Trivia> & {
    _id: import("mongoose").Types.ObjectId;
}>;
