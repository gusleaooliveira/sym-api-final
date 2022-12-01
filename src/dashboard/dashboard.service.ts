import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';
import { Dashboard } from './entities/dashboard.entity';

@Injectable()
export class DashboardService {
  constructor(
    @InjectRepository(Dashboard)
    private dashboardRepository: Repository<Dashboard>,
  ) { }

  async create(createDashboardDto: CreateDashboardDto) {
    return await this.dashboardRepository.save(createDashboardDto);
  }

  async findAll() {
    return await this.dashboardRepository.find();
  }

  async findOne(id: number) {
    return await this.dashboardRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateDashboardDto: UpdateDashboardDto) {
    return await this.dashboardRepository.update(id, updateDashboardDto);
  }

  async remove(id: number) {
    return await this.dashboardRepository.delete(id);
  }
}
