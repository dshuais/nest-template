import { Injectable } from '@nestjs/common';

import { UserService } from '../user.service';
import UserDO from '../../dataobject/userDO';
import { CommonResult } from '../../../common/types';

@Injectable()
export class UserServiceImpl implements UserService {
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
