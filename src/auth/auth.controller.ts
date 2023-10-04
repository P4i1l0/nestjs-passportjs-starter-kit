import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './localAuth.guard';
import { User } from 'src/common/decorator/user.decorator';

@Controller('auth')
export class AuthController {
  @Post()
  @UseGuards(LocalAuthGuard)
  logIn() {
    return 'login ok';
  }

  @Get()
  getUserInfo(@User() user) {
    console.log(user);
    return user;
  }
}
