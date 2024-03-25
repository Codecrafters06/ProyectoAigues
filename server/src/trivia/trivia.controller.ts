import { Controller, Get, Param, Post, Query, Body, Put, Delete } from '@nestjs/common';
import { TriviaService } from './trivia.service';

@Controller('trivia')
export class TriviaController {
    constructor(private readonly triviaService: TriviaService) {}
    @Get()
    findAll(@Query('limit') limit:string) {
        return this.triviaService.findAll(limit);
    }
    @Get(':triviaId')
    findTrivia(@Param('triviaId') triviaId: string) {
        return this.triviaService.findTrivia(triviaId);
    }
    @Post()
    createTrivia(@Body() newTrivia: any) {
        return this.triviaService.createTrivia(newTrivia);   
    }
    @Put(':triviaId')
    updateTrivia(@Param('triviaId') triviaId: string, @Body() trivia: any) {
        return this.triviaService.updateTrivia(triviaId, trivia);
    }
    @Delete(':triviaId')
    deleteTrivia(@Param('triviaId') triviaId: string) {
        return this.triviaService.deleteTrivia(triviaId);
    }
}
