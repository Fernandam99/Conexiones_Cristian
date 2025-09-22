import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
// activar validaciones globales
app.useGlobalPipes(new ValidationPipe({
  whitelist: true, //elimina propiedades que no este en los dto
    forbidNonWhitelisted: true, //Lanza error en caso de que se tengan en el body atributos o propiedades que no estan definidas en el Dto
  transform: true //combierte los tipos del body automaticamente a los tipos del Dto
}))

  await app.listen(process.env.PORT ?? 3011);
}
bootstrap();

