import { IsString, IsOptional, IsEnum } from 'class-validator';
import { TaskStatus } from '../helper/task-status.enum';


export class UpdateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
