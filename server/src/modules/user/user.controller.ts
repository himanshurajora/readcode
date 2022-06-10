import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import {
  USER_CONTROLLER_ROUTE,
  USER_GET_BY_ID_ROUTE,
  USER_GET_BY_USERNAME_ROUTE,
} from 'src/constants/api-routes.routes';
import { UserService } from './user.service';

@Controller(USER_CONTROLLER_ROUTE)
export class UserController {
  constructor(private userService: UserService) {}

  @Get(USER_GET_BY_ID_ROUTE)
  async getUserDetailsById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.getUserDetails(id);
  }

  @Get(USER_GET_BY_USERNAME_ROUTE)
  async getUserDetailsByUsername(@Param('username') username: string) {
    return this.userService.getUserByUsername(username);
  }
}
