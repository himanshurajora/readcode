import { IsNotEmpty, IsString } from "class-validator";

export class TokenParams{
    @IsString()
    @IsNotEmpty()
    token: string;
}