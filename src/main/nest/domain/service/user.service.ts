import UserDO from '../dataobject/userDO';
import { CommonResult } from '../../common/types';

export class UserService {
  getUsers: () => CommonResult<UserDO>;
}
