import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { Controllers, Services } from './main/nest';
import { LoggerMiddleware } from './main/nest/common/middleware/logger.middleware';

@Module({
  imports: [],
  controllers: Controllers,
  providers: Services
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
