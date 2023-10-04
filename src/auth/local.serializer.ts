import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { AuthService } from './auth.service';

const User = {
  id: 1,
  email: 'moonstone1126@naver.com',
  password: '1234',
};

@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(private readonly authService: AuthService) {
    super();
  }

  serializeUser(user, done: CallableFunction) {
    console.log(user);
    done(null, user.id);
  }

  async deserializeUser(userId: string, done: CallableFunction) {
    if (User.id == +userId) {
      done(null, User);
      return;
    } else {
      done(new Error('User Not Found'));
      return;
    }
  }
}
