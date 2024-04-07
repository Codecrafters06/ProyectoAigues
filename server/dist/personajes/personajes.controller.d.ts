import { PersonajesService } from './personajes.service';
export declare class PersonajesController {
    private readonly personajesService;
    constructor(personajesService: PersonajesService);
    findAll(response: any): Promise<void>;
    findOne(response: any, id: string): Promise<void>;
}
