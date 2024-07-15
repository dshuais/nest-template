import { AppServiceImpl } from './impl/appServiceImpl';
import { UserServiceImpl } from './impl/userServiceImpl';

export const services = {
  AppServiceImpl,
  UserServiceImpl
};

export default Object.values(services);
