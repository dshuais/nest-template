/*
 * @Author: dushuai
 * @Date: 2024-07-06 12:39:56
 * @LastEditors: dushuai
 * @LastEditTime: 2024-07-06 13:30:39
 * @Description: Controller
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from '../service/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api')
  getApi(): object {
    return this.appService.getApi();
  }
}
