import {
  Controller,
  Get,
  Param,
  ParseIntPipe
} from '@nestjs/common';
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

}
