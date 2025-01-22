import { HttpException } from '@nestjs/common';

export type Result<T> = {
  code: number;
  data: T;
  msg: string;
};

export type CommonResult<T = any> = Result<T> | HttpException;
