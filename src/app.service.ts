/*
 * @Author: dushuai
 * @Date: 2024-07-06 12:39:56
 * @LastEditors: dushuai
 * @LastEditTime: 2024-07-06 13:01:48
 * @Description: service
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getApi(): object {
    return {
      code: 200,
      data: {
        id: 1,
        name: 'dushuai',
        age: 18
      },
      msg: '请求成功'
    }
  }
}
