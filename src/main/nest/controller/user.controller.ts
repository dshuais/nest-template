import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query
} from '@nestjs/common';

import { UserServiceImpl } from '../domain/service/impl/userServiceImpl';
import UserDO from '../domain/dataobject/userDO';
import { CommonResult } from '../common/types';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserServiceImpl) {}

  @Get()
  getUsers(@Query() query: { err: string }): CommonResult<UserDO> {
    if (query.err) {
      return new HttpException(
        {
          code: HttpStatus.INTERNAL_SERVER_ERROR,
          msg: 'This is a custom message'
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: 'This is a custom message'
        }
      );
    }
    return this.userService.getUsers();
  }
}
