import { Injectable } from '@nestjs/common';
import { AppService } from '../app.service';

@Injectable()
export class AppServiceImpl implements AppService {
  getHello() {
    return 'Hello World!';
  }

  getApi() {
    return {
      code: 200,
      data: {
        id: 1,
        name: 'dushuai',
        age: 18
      },
      msg: '请求成功'
    };
  }
}
