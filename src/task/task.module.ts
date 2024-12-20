import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { Task } from './task.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskService } from './task.service';


@Module({
  imports: [TypeOrmModule.forFeature([Task])], 
  controllers: [TaskController], providers: [TaskService]
})
export class TaskModule {}
