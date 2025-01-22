import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { formatDate } from 'turboutils';
import { hash, compare } from 'bcrypt';

import CommonResult from 'src/common/CommonResult';
import UserDO from 'src/common/dataobject/userDO';

import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) {}

  /**
   * 用户注册
   * @param user 用户信息
   * @returns
   */
  async register(user: UserDO) {
    if (!user.userName || !user.password)
      return CommonResult.validateFailed('用户名或密码不能为空');

    const check = await this.prisma.t_user.findFirst({
      where: {
        user_name: user.userName
      }
    });
    if (check) {
      return CommonResult.validateFailed('用户名已存在');
    }

    const { id } = await this.prisma.t_user.create({
      data: {
        user_name: user.userName,
        password: await hash(user.password, 10),
        create_time: formatDate(),
        update_time: formatDate()
      }
    });

    return CommonResult.success({ id });
  }

  /**
   * 用户登录
   */
  async login(user: UserDO) {
    if (!user.userName || !user.password)
      return CommonResult.validateFailed('用户名或密码不能为空');

    const check = await this.prisma.t_user.findFirst({
      where: {
        user_name: user.userName
      }
    });
    if (!check) {
      return CommonResult.validateFailed('用户不存在');
    }

    if (!(await compare(user.password, check.password))) {
      return CommonResult.validateFailed('密码错误');
    }

    return CommonResult.success({
      id: check.id,
      userName: check.user_name,
      token: await this.jwtService.signAsync({
        id: check.id,
        userName: check.user_name,
        status: check.status
      })
    });
  }
}
