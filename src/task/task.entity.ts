import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('tasks') // Table name
export class Task {
  @PrimaryGeneratedColumn() // Auto-incremented ID
  id: number;

  @Column() // Title of the task
  title: string;

  @Column({ nullable: true }) // Description is optional
  description?: string;

  @Column({ default: 'pending' }) // Default status is 'pending'
  status: string;
}
