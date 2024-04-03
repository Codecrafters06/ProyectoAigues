import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TriviaModule } from './trivia/trivia.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [TriviaModule, MongooseModule.forRoot('mongodb+srv://aiguesfactoria:gntobYwYmvM2ISYe@cluster0.tvvzq92.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
 