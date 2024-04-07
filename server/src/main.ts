import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
<<<<<<< HEAD

  const config = new DocumentBuilder()
    .setTitle('Proyecto Aigues')
    .setDescription('Gamificación Museo de Aigues')
    .setVersion('1.0')
    .addTag('aigues')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document)
 
  await app.listen(3005);
=======
  await app.listen(process.env.PORT || 3005);
>>>>>>> feat-deploy-backend-pruebas
}

bootstrap();

