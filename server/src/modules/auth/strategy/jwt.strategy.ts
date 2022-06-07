import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/modules/user/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'the-secret-key',
    });
  }

  async validate(payload: any) {
    // check if the user exists
    const user = await this.userService.findUserById(payload.sub);
    if (!user) throw new UnauthorizedException('Unauthorized User');
    return payload;
  }
}
