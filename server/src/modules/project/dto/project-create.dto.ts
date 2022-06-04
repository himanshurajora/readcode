import { IsArray, IsNotEmpty, IsString } from 'class-validator';


export class ProjectCreateDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  link: string;

  @IsArray()
  @IsString({each: true})
  @IsNotEmpty()
  tags: string[];
}
