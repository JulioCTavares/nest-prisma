import { IsEmail, isNotEmpty, IsNotEmpty, IsString } from 'class-validator';

export class AuthDTO {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @isNotEmpty()
  password: string;
}
