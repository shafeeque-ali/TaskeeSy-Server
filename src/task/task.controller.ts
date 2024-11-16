import { Controller, Get, Post, Param, Body, Patch, Delete, Put } from '@nestjs/common';
import { Task } from './task.entity';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(
    @Body('title') title: string,
    @Body('description') description?: string,
  ): Promise<Task> {
    return this.taskService.createTask(title, description);
  }

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: number): Promise<Task> {
    return this.taskService.getTaskById(id);
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('description') description?: string,
    @Body('status') status?: string,
  ): Promise<Task> {
    return this.taskService.updateTask(id, title, description, status);
  }

  @Patch(':id')
  async updateTaskStatus(
    @Param('id') id: number,
    @Body('status') status: string,
  ): Promise<Task> {
    return this.taskService.updateTaskStatus(id, status);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: number): Promise<void> {
    return this.taskService.deleteTask(id);
  }
}
