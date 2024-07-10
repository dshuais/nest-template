import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('Request...');
    // console.log('req:>> ', req);
    // console.log('res:>> ', res);
    next();
  }
}
