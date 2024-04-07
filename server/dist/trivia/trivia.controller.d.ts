import { TriviaService } from './trivia.service';
import { Trivia } from './schemas/trivia.schema';
export declare class TriviaController {
    private readonly triviaService;
    constructor(triviaService: TriviaService);
    findAll(response: any): Promise<void>;
    findOne(id: string, response: any): Promise<void>;
    create(trivia: Trivia, response: any): Promise<void>;
    update(id: string, trivia: Trivia, response: any): Promise<void>;
    delete(id: string, response: any): Promise<void>;
}
