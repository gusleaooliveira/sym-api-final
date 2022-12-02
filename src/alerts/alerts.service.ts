import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; 
import { Repository } from 'typeorm'; 
import { CreateAlertDto } from './dto/create-alert.dto';
import { UpdateAlertDto } from './dto/update-alert.dto';
import { Alert } from './entities/alert.entity';

@Injectable()
export class AlertsService {
  constructor(
    @InjectRepository(Alert) private AlertRepository: Repository<Alert>,
  ) { }

  async create(createAlertDto: CreateAlertDto) {
    return await this.AlertRepository.save(createAlertDto);
  }

  async findAll(id: number) {
    return await this.AlertRepository.find({
      where: {
        user_id: id,
      },
    });
  }

  async findByUserId(id: number) {
    return await this.AlertRepository.find({
      where: {
        user_id: id,
      },
    });
  }

  async findOne(id: number) {
    return await this.AlertRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateAlertDto: UpdateAlertDto) {
    return await this.AlertRepository.update(id, updateAlertDto);
  }

  async remove(id: number) {
    return await this.AlertRepository.delete(id);
  }
}
