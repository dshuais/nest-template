/*
 * @Author: dushuai
 * @Date: 2024-07-06 12:39:56
 * @LastEditors: dushuai
 * @LastEditTime: 2024-07-06 12:56:44
 * @Description: main
 */
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { PORT } from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
  console.log(`Application is running on: http://localhost:${PORT}`);
}
bootstrap();
