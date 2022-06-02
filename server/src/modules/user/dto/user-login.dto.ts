import { Injectable } from '@nestjs/common';
import { IsString, IsNotEmpty, ValidateIf } from 'class-validator';
@Injectable()
export class UserLoginDto{
    // atleast one of the following fields must be present
    // email or username

    @ValidateIf((o) => !o.email || o.username)
    @IsString()
    @IsNotEmpty()
    username: string;

    @ValidateIf(o => !o.username || o.email)
    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;
}
