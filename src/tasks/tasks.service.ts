import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) private TaskRepository: Repository<Task>,
  ) { }

  async create(createTaskDto: CreateTaskDto) {
    return await this.TaskRepository.save(createTaskDto);
  }

  async findAll() {
    return await this.TaskRepository.find();
  }

  async findOne(id: number) {
    return await this.TaskRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    return await this.TaskRepository.update(id, updateTaskDto);
  }

  async remove(id: number) {
    return await this.TaskRepository.delete(id);
  }
}
