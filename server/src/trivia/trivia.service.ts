import { Injectable } from '@nestjs/common';

@Injectable()
export class TriviaService {
    findAll(limit: string) {
        return `findAll funciona limite de ${limit} registros`;
    }
    findTrivia(triviaId: string) {
        return `findTrivia funciona con el triviaId = ${triviaId}`;
    }
    createTrivia(trivia: any) {
        console.log(trivia);
        return trivia;
    }
    updateTrivia(triviaId: string, trivia: any) {
        console.log(trivia);
        return `updateTrivia funciona con el triviaId = ${triviaId}`;
    }
    deleteTrivia(triviaId: string) {
        return `deleteTrivia funciona con el triviaId = ${triviaId}`;
    }
    }
