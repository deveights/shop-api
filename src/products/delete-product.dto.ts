import { IsBoolean, IsOptional } from 'class-validator';

export class DeleteProductDto {
  @IsOptional()
  @IsBoolean()
  isDeleted: boolean;
}
