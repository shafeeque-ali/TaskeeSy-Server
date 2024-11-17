import { IsString, IsOptional, IsEnum } from 'class-validator';
import { TaskStatus } from '../helper/task-status.enum';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  // @IsEnum(['pending', 'in-progress', 'completed'])
  // status: string;
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
