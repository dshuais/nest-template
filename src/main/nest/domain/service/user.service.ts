import { Injectable } from '@nestjs/common';

import UserDO from '../dataobject/userDO';

@Injectable()
export class UserService {
  getUsers(): CommonResult<UserDO> {
    return {
      code: 200,
      data: {
        id: 1,
        userName: '张三'
      },
      msg: '操作成功'
    };
  }
}
