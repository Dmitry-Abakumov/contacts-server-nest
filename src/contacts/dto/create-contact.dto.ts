import {
  IsString,
  IsBoolean,
  IsEmail,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class CreateContactDto {
  @IsString()
  @IsNotEmpty()
  name!: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  phone?: string;

  @IsBoolean()
  @IsOptional()
  favorite?: boolean;
}
