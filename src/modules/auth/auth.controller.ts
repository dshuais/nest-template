import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import UserDO from 'src/common/dataobject/userDO';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() user: UserDO) {
    const result = await this.authService.register(user);
    return result;
  }

  @Post('login')
  async login(@Body() user: UserDO) {
    return await this.authService.login(user);
  }
}
