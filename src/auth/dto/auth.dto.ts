import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignupDto {
  constructor(email: string, name: string, password: string) {
    this.email = email;
    this.name = name;
    this.password = password;
  }

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class SigninDto {
  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
