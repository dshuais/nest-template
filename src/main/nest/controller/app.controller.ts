/*
 * @Author: dushuai
 * @Date: 2024-07-06 12:39:56
 * @LastEditors: dushuai
 * @LastEditTime: 2024-07-06 13:30:39
 * @Description: Controller
 */
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query
} from '@nestjs/common';
import { AppService } from '../domain/service/app.service';
import CommonResult from '../common/api/CommonResult';
import ResultCode from '../common/api/ResultCode';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('api')
  getApi(@Query() query: { err: string }): object {
    console.log(query);
    if (query.err === '1') {
      // return new HttpException(
      //   {
      //     code: HttpStatus.INTERNAL_SERVER_ERROR,
      //     msg: 'This is a custom message'
      //   },
      //   HttpStatus.INTERNAL_SERVER_ERROR,
      //   {
      //     cause: 'This is a custom message'
      //   }
      // );
      return new HttpException(
        'This is a custom message',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
      // return new BadRequestException('This is a custom message'
    } else return this.appService.getApi();
  }

  @Get('test')
  test(): CommonResult {
    // return CommonResult.success();
    return CommonResult.failed(ResultCode.FORBIDDEN);
  }
}
