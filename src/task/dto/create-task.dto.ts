import { IsString, IsOptional, IsEnum } from 'class-validator';
import { TaskStatus } from '../helper/task-status.enum';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional() // optional field
  @IsString()
  description?: string;

  // @IsEnum(['pending', 'in-progress', 'completed'])
  // status: string;
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
