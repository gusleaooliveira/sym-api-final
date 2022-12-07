import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateExpenseDto } from './dto/create-expense.dto';
import { UpdateExpenseDto } from './dto/update-expense.dto';
import { Expense } from './entities/expense.entity';

@Injectable()
export class ExpensesService {
  constructor(
    @InjectRepository(Expense) private ExpenseRepository: Repository<Expense>,
  ) { }

  async create(createExpenseDto: CreateExpenseDto) {
    return await this.ExpenseRepository.save(createExpenseDto);
  }

  async findAll(id: number) {
    return await this.ExpenseRepository.find({
      where: {
        user_id: id,
      },
    });
  }

  async findAllService(){
    return await this.ExpenseRepository.find()
  }


  async findByUserId(id: number) {
    return await this.ExpenseRepository.find({
      where: {
        user_id: id,
      },
    });
  }

  async findByParams(options: FindManyOptions){
    return await this.ExpenseRepository.find(options)
  }


  async findOne(id: number) {
    return await this.ExpenseRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateExpenseDto: UpdateExpenseDto) {
    return await this.ExpenseRepository.update(id, updateExpenseDto);
  }

  async remove(id: number) {
    return await this.ExpenseRepository.delete(id);
  }
}
