import { Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  signin() {
    return 'I am signed in';
  }

  @Post('signup')
  signup() {
    return 'I am signed up';
  }
}
