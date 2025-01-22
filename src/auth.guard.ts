import {
  Injectable,
  ExecutionContext,
  HttpStatus,
  HttpException
} from '@nestjs/common';
import { AuthGuard as AuthGuardPassport } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

import { TOKEN_KEY } from 'config';

@Injectable()
export class AuthGuard extends AuthGuardPassport('jwt') {
  constructor(private readonly jwtService: JwtService) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<any> {
    const req = context.switchToHttp().getRequest();

    try {
      const accessToken = req.get(TOKEN_KEY);

      if (!accessToken) {
        throw new HttpException('请先登录', HttpStatus.UNAUTHORIZED);
      }
      const user = await this.jwtService.verifyAsync(accessToken);

      if (user) {
        req.user = user;
        return true;
      }
    } catch (error) {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
  }
}
