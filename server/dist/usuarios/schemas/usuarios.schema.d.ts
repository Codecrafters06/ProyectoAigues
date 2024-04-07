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
export type UsuariosDocument = Usuarios & Document;
export declare class Usuarios {
    id: string;
    name: string;
    lastname: string;
    password: string;
    game: {
        id: number;
        points: number;
        last_question: number;
    };
}
export declare const UsuariosSchema: import("mongoose").Schema<Usuarios, import("mongoose").Model<Usuarios, any, any, any, Document<unknown, any, Usuarios> & Usuarios & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Usuarios, Document<unknown, {}, import("mongoose").FlatRecord<Usuarios>> & import("mongoose").FlatRecord<Usuarios> & {
    _id: import("mongoose").Types.ObjectId;
}>;
