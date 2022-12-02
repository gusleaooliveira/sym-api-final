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
import { DashboardService } from './dashboard.service';
import { CreateDashboardDto } from './dto/create-dashboard.dto';
import { UpdateDashboardDto } from './dto/update-dashboard.dto';

import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { ExpensesService } from 'src/expenses/expenses.service';
import { RevenuesService } from 'src/revenues/revenues.service';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags('dashboard')
@Controller('dashboard')
export class DashboardController {
  constructor(private readonly dashboardService: DashboardService,
    private readonly expensesService: ExpensesService,
    private readonly revenuesService: RevenuesService) { }

  @Post()
  create(@Body() createDashboardDto: CreateDashboardDto) {
    return this.dashboardService.create(createDashboardDto);
  }

  @Get()
  findAll() {
    return this.dashboardService.findAll();
  }

  @Get(':id')
 async findOne(@Param('id') id: number) {
  let expenses_data = await this.expensesService.findByUserId(id)
  let revenues_data = await this.revenuesService.findByUserId(id)
    
    let total_espenses = 0
    let total_revenues = 0
    let total_saldo = 0
    let total_saidas_recorrentes = 0
    let total_saidas_eventuais = 0
    let total_entradas_recorrentes = 0
    let total_entradas_eventuais = 0

    expenses_data.forEach((expense)=>{
      total_espenses += expense.value   
      
      switch(expense.frequency){
        case 'Mensal':total_saidas_recorrentes += expense.value; break;
        case 'Frequente': total_saidas_recorrentes += expense.value; break;
        default: total_saidas_eventuais += expense.value; break;
      }

  
    })


    revenues_data.forEach((revenue)=>{
      total_revenues += revenue.value      


      switch(revenue.frequency){
        case 'Mensal':total_entradas_recorrentes += revenue.value; break;
        case 'Frequente': total_entradas_recorrentes += revenue.value; break;
        default: total_entradas_eventuais += revenue.value; break;
      }

      
    })
    
    total_saldo = (total_revenues - total_espenses)
    

    return {
      total_gastos: total_espenses,
      total_recebimentos: total_revenues,
      total_saldo: total_saldo,
      status: total_saldo < total_revenues ? true : false,
      total_saidas_recorrentes: total_saidas_recorrentes,
      total_saidas_eventuais: total_saidas_eventuais,
      total_entradas_recorrentes: total_entradas_recorrentes,
      total_entradas_eventuais: total_entradas_eventuais
    }
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updateDashboardDto: UpdateDashboardDto,
  ) {
    return this.dashboardService.update(id, updateDashboardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.dashboardService.remove(id);
  }
}
