import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { RevenuesService } from './revenues.service';
import { CreateRevenueDto } from './dto/create-revenue.dto';
import { UpdateRevenueDto } from './dto/update-revenue.dto';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('revenues')
@Controller('revenues')
export class RevenuesController {
  constructor(private readonly revenuesService: RevenuesService) { }

  @Post()
  create(@Body() createRevenueDto: CreateRevenueDto) {
    return this.revenuesService.create(createRevenueDto);
  }

  @Get()
  findAll() {
    return this.revenuesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.revenuesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateRevenueDto: UpdateRevenueDto) {
    return this.revenuesService.update(id, updateRevenueDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.revenuesService.remove(id);
  }
}
