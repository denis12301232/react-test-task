import type { IUser } from '@/types';
import { $api } from '..';

export default class UserService {
  static index() {
    return $api.get('users').json<IUser[]>();
  }
}
