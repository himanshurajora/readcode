import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
} from '@nestjs/common';
import { RegistrationGuard } from 'src/core/guards/auth/registration.guard';
import { UserLoginDto } from './dto/user-login.dto';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('id/:id')
  async getUserDetailsById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserDetails(id);
  }

  @Get('username/:username')
  async getUserDetailsByUsername(@Param('username') username: string) {
    return this.userService.getUserByUsername(username);
  }

  @Post('register')
  @UseGuards(RegistrationGuard)
  async registerUser(@Body() user: UserRegisterDto) {
    return this.userService.createUser(user);
  }

  @Get('login')
  async loginUser(@Body() user: UserLoginDto){
    return this.userService.loginUser(user as any);
  }
}
