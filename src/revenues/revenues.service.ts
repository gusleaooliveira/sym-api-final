import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';
import { Revenue } from './entities/revenue.entity';

@Injectable()
export class RevenuesService {
  constructor(
    @InjectRepository(Revenue) private RevenueRepository: Repository<Revenue>,
  ) { }

  async create(createRevenueDto: CreateRevenueDto) {
    return await this.RevenueRepository.save(createRevenueDto);
  }

  async findAll(user_id: number) {
    return await this.RevenueRepository.find({
      where: {
        user_id: user_id,
      },
    });


    

  }

  async findAllService(){
    return await this.RevenueRepository.find()
  }

  async findOne(id: number) {
    return await this.RevenueRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async findByUserId(id: number) {
    return await this.RevenueRepository.find({
      where: {
        user_id: id,
      },
    });
  }

  async update(id: number, updateRevenueDto: UpdateRevenueDto) {
    return await this.RevenueRepository.update(id, updateRevenueDto);
  }

  async remove(id: number) {
    return await this.RevenueRepository.delete(id);
  }
}
