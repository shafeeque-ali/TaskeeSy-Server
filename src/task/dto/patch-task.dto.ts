import { IsString, IsOptional, IsEnum } from 'class-validator';

export class PatchTaskDto {
  @IsEnum(['pending', 'in-progress', 'completed'])
  status: string;
}
