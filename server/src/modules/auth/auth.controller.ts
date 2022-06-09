import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import {
  AUTH_CONTROLLER_ROUTE,
  AUTH_LOGIN_ROUTE,
  AUTH_REGISTER_ROUTE,
} from 'src/constants/api-routes.routes';
import { RegistrationGuard } from 'src/core/guards/auth/registration.guard';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';

@Controller(AUTH_CONTROLLER_ROUTE)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post(AUTH_REGISTER_ROUTE)
  @UseGuards(RegistrationGuard)
  async registerUser(@Body() user: UserRegisterDto) {
    return this.authService.createUser(user);
  }

  @Post(AUTH_LOGIN_ROUTE)
  async loginUser(@Body() user: UserLoginDto) {
    return this.authService.loginUser(user as any);
  }
}
