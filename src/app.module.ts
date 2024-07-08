import { Module } from '@nestjs/common';

import { Controllers, Services } from './main/nest';

@Module({
  imports: [],
  controllers: Controllers,
  providers: Services
})
export class AppModule {}
