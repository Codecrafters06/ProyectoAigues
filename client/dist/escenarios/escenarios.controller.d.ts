import { EscenariosService } from './escenarios.service';
export declare class EscenariosController {
    private readonly escenariosService;
    constructor(escenariosService: EscenariosService);
    findAll(response: any): Promise<void>;
    findOne(id: string, response: any): Promise<void>;
}
