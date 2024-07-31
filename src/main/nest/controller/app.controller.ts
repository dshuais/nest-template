/*
 * @Author: dushuai
 * @Date: 2024-07-06 12:39:56
 * @LastEditors: dushuai
 * @LastEditTime: 2024-07-31 22:02:06
 * @Description: Controller
 */
import { Body, Controller, Get, Ip, Post, Query } from '@nestjs/common';
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
  async test(@Query() query: object): Promise<CommonResult> {
    console.log('query:>> ', query);
    const data = await this.appService.getTest();
    return CommonResult.success(data);
    // return CommonResult.failed(ResultCode.FORBIDDEN);
    // return CommonResult.validateFailed();
  }

  @Post('test')
  GetPostTest(@Body() body: object): CommonResult {
    console.log('body:>> ', body);
    return CommonResult.success('post success');
  }

  @Post('testJSON')
  GetPostTestForm(@Body() body: object): CommonResult {
    console.log('bodyJSON:>> ', body);
    return CommonResult.success('post succes');
  }

  @Post('testError')
  testError(): CommonResult {
    return CommonResult.failed(ResultCode.UNAUTHORIZED);
  }
}
