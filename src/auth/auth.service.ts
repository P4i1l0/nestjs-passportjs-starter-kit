import { Injectable } from '@nestjs/common';

const User = {
  id: 1,
  email: 'moonstone1126@naver.com',
  password: '1234',
};

@Injectable()
export class AuthService {
  async validateUser(email: string, password: string) {
    if (User.email === email && User.password === password) {
      const { password, ...userWithoutPassword } = User;
      return userWithoutPassword;
    }
    return null;
  }
}
