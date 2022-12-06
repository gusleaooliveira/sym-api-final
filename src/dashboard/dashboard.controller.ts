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
} from "@nestjs/common";
import { DashboardService } from "./dashboard.service";
import { CreateDashboardDto } from "./dto/create-dashboard.dto";
import { UpdateDashboardDto } from "./dto/update-dashboard.dto";

import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth-guard";
import { ExpensesService } from "src/expenses/expenses.service";
import { RevenuesService } from "src/revenues/revenues.service";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags("dashboard")
@Controller("dashboard")
export class DashboardController {
  constructor(
    private readonly dashboardService: DashboardService,
    private readonly expensesService: ExpensesService,
    private readonly revenuesService: RevenuesService
  ) { }

  @Post()
  create(@Body() createDashboardDto: CreateDashboardDto) {
    return this.dashboardService.create(createDashboardDto);
  }

  @Get()
  findAll() {
    return this.dashboardService.findAll();

    
  }

  @Get(":id")
  async findOne(@Param("id") id: number) {
    const expenses_data = await this.expensesService.findByUserId(id);
    const revenues_data = await this.revenuesService.findByUserId(id);

    let total_expenses = 0;
    let total_revenues = 0;
    let total_saldo = 0;
    const total_saidas_recorrentes = 0;
    const total_saidas_eventuais = 0;
    const total_entradas_recorrentes = 0;
    const total_entradas_eventuais = 0;

    expenses_data.map((chave) => {
      total_expenses += chave.value;
    });

    revenues_data.map((chave) => {
      total_revenues += chave.value;
    });

    total_saldo = total_revenues - total_expenses;

    return {
      total_gastos: total_expenses,
      total_recebimentos: total_revenues,
      total_saldo: total_saldo,
      status: total_saldo <= total_revenues && total_saldo > 0 ? true : false,
      total_saidas_recorrentes: total_saidas_recorrentes,
      total_saidas_eventuais: total_saidas_eventuais,
      total_entradas_recorrentes: total_entradas_recorrentes,
      total_entradas_eventuais: total_entradas_eventuais,
    };
  }

  @Put(":id")
  update(
    @Param("id") id: number,
    @Body() updateDashboardDto: UpdateDashboardDto
  ) {
    return this.dashboardService.update(id, updateDashboardDto);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.dashboardService.remove(id);
  }
}
