import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TriviaService } from './trivia.service';
import { TriviaController } from './trivia.controller';
import { Trivia, TriviaSchema } from './schemas/trivia.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Trivia.name, schema: TriviaSchema }]),
  ],
  controllers: [TriviaController],
  providers: [TriviaService],
})
export class TriviaModule {}
