import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const PORT = process.env.PORT || 5000;

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({ origin: '*' });

  await app.listen(PORT, () => console.log('PORT:', PORT));
}
bootstrap();
