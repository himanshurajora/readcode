import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { RegistrationGuard } from 'src/core/guards/auth/registration.guard';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @UseGuards(RegistrationGuard)
  async registerUser(@Body() user: UserRegisterDto) {
    return this.authService.createUser(user);
  }

  @Post('login')
  async loginUser(@Body() user: UserLoginDto) {
    return this.authService.loginUser(user as any);
  }
}
