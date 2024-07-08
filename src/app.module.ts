import { Module } from '@nestjs/common';
import services from './main/nest/service';
import controllers from './main/nest/controller';

@Module({
  imports: [],
  controllers,
  providers: services
})
export class AppModule {}
