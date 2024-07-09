import { Injectable } from '@nestjs/common';

import { User } from '../dataobject/userDO';

@Injectable()
export class UserService {
  getUsers(): Res<User> {
    return {
      code: 200,
      data: {
        id: 1,
        name: '张三'
      },
      msg: '操作成功'
    };
  }
}
