/*
 * @Author: dushuai
 * @Date: 2024-07-06 12:39:56
 * @LastEditors: dushuai
 * @LastEditTime: 2024-07-31 21:20:44
 * @Description: Controller
 */
import { Controller, Get, Ip, Query } from '@nestjs/common';
import { AppService } from '../domain/service/app.service';
import CommonResult from '../common/api/CommonResult';
import ResultCode from '../common/api/ResultCode';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(@Ip() ip: string): string {
    console.log('ip:>> ', ip);

    return this.appService.getHello();
  }

  @Get('api')
  getApi(@Query() query: { err: string }): CommonResult {
    console.log(query);
    if (query.err === '1') {
      return CommonResult.failed(ResultCode.CUSTOM_FAILED);
    } else return CommonResult.success(this.appService.getApi());
  }

  @Get('test')
  async test(): Promise<CommonResult> {
    const data = await this.appService.getTest();
    return CommonResult.success(data);
    // return CommonResult.failed(ResultCode.FORBIDDEN);
    // return CommonResult.validateFailed();
  }
}
