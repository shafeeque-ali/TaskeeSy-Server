import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepository: Repository<Task>,
  ) {}

  // Create a new task
  async createTask(title: string, description?: string): Promise<Task> {
    const task = this.taskRepository.create({ title, description });
    return this.taskRepository.save(task);
  }

  // Get all tasks
  async getAllTasks(): Promise<Task[]> {
    return this.taskRepository.find();
  }

  // Get a task by ID
  async getTaskById(id: number): Promise<Task> {
    return this.taskRepository.findOneBy({ id });
  }

  // Update all task values
  async updateTask(id: number, title: string, description?: string, status?: string): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) throw new Error('Task not found');

    task.title = title;
    if (description) task.description = description;
    if (status) task.status = status;

    return this.taskRepository.save(task);
  }

  // Update task status
  async updateTaskStatus(id: number, status: string): Promise<Task> {
    const task = await this.taskRepository.findOneBy({ id });
    if (!task) throw new Error('Task not found');
    task.status = status;
    return this.taskRepository.save(task);
  }

  // Delete a task
  async deleteTask(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
