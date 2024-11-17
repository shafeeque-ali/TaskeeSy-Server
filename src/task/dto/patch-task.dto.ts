import { IsString, IsOptional, IsEnum } from 'class-validator';
import { TaskStatus } from '../helper/task-status.enum';


export class PatchTaskDto {
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
