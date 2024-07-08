import { Module } from '@nestjs/common';

import { Controllers, Services } from './main/index';

@Module({
  imports: [],
  controllers: Controllers,
  providers: Services
})
export class AppModule {}
