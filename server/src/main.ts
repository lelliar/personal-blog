import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors()
  app.useStaticAssets('uploads' , {
    prefix:'/uploads'
  })
  app.useStaticAssets('admin' , {
    prefix:'/admin'
  })
  app.useStaticAssets('web' , {
    prefix:'/'
  })
  const options = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  await app.listen(process.env.ADMIN_PORT);
  console.log('http://175.24.53.253:3008/api-docs')
}
bootstrap();
