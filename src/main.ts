import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication, } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';

// エントリポイント
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule, 
    // new FastifyAdapter(),
    );
  await app.listen(3100);
}
bootstrap();
