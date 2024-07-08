import { Module } from '@nestjs/common';
import services from './service';
import controllers from './controller';

@Module({
  imports: [],
  controllers,
  providers: services
})
export class AppModule {}
