import { IsNotEmpty, IsOptional, IsString } from 'class-validator'

export class UpdateRestaurantDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  address?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  phone?: string
}