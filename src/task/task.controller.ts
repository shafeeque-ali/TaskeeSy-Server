import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Patch,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { Task } from './task.entity';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PatchTaskDto } from './dto/patch-task.dto';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.taskService.createTask(
      createTaskDto.title,
      createTaskDto.description,
      createTaskDto.status,
    );
  }

  @Get()
  async getAllTasks(@Query('status') status?: string): Promise<Task[]> {
    return this.taskService.getAllTasks(status);
  }

  @Get(':id')
  async getTaskById(@Param('id') id: number): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: number,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    return this.taskService.updateTask(
      id,
      updateTaskDto.title,
      updateTaskDto.description,
      updateTaskDto.status,
    );
  }

  @Patch(':id')
  async updateTaskStatus(
    @Param('id') id: number,
    @Body() patchTaskDto: PatchTaskDto,
  ): Promise<Task> {
    return this.taskService.updateTaskStatus(id, patchTaskDto.status);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<void> {
    return this.taskService.deleteTask(id);
  }
}
