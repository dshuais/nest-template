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
  getHello() {
    return 'Hello World!';
  }

  getApi() {
    return {
      id: 1,
      name: 'dushuai',
      age: 18
    };
  }

  getTest() {
    return new Promise((resolve) => {
      const data = [
        { id: 1, name: 'dushuai', age: 18 },
        { id: 2, name: 'dushuai2', age: 18 },
        { id: 3, name: 'dushuai3', age: 18 },
        { id: 4, name: 'dushuai4', age: 18 }
      ];
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  }
}
