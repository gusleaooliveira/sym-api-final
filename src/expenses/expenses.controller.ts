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
import { ExpensesService } from "./expenses.service";
import { CreateExpenseDto } from "./dto/create-expense.dto";
import { UpdateExpenseDto } from "./dto/update-expense.dto";

import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth-guard";
import { RevenuesService } from "src/revenues/revenues.service";
import { AlertsService } from "src/alerts/alerts.service";
import { MailService } from "src/mail/mail.service";
import { UsersService } from "src/users/users.service";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags("expenses")
@Controller("expenses")
export class ExpensesController {
  constructor(
    private readonly expensesService: ExpensesService,
    private readonly revenuesService: RevenuesService,
    private readonly alertsService: AlertsService,
    private readonly mailService: MailService,
    private readonly userService: UsersService
  ) {}

  async gasto(createExpenseDto) {
    const expenses_data = await this.expensesService.findByUserId(
      createExpenseDto.user_id
    );
    const revenues_data = await this.revenuesService.findByUserId(
      createExpenseDto.user_id
    );
    const alerts_data = await this.alertsService.findAllByUser(
      createExpenseDto.user_id
    );

    let total_expenses = 0;
    let total_revenues = 0;
    let total_saldo = 0;
    expenses_data.map((chave) => {
      total_expenses += chave.value;
    });
    revenues_data.map((chave) => {
      total_revenues += chave.value;
    });

    total_saldo = total_revenues - total_expenses;

    console.log(total_saldo, total_expenses, alerts_data.value);

    let user = await this.userService.findOne(createExpenseDto.user_id);
    let status = "";

    if (total_saldo < 0) {
      status = "Saldo negativo!";
      await this.mailService.sendUserConfirmation(user, status);
    } else if (total_expenses == alerts_data.value) {
      status = "Chegou no limite";
      await this.mailService.sendUserConfirmation(user, status);
    } else if (total_expenses > alerts_data.value) {
      status = "Ultrapassou o limite";
      await this.mailService.sendUserConfirmation(user, status);
    } else {
      status="Saldo ok";
    }

    console.log("Status:", status);

  }

  @Post()
  async create(@Body() createExpenseDto: CreateExpenseDto) {
    const expense = this.expensesService.create(createExpenseDto);

    this.gasto(createExpenseDto);

    return expense;
  }

  @Get("/all/:user_id")
  findAll(@Param("user_id") user_id: number) {
    return this.expensesService.findAll(user_id);
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.expensesService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() updateExpenseDto: UpdateExpenseDto) {
    let expense = this.expensesService.update(id, updateExpenseDto);

    this.gasto(updateExpenseDto);

    return expense;
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    let dt_expense = this.expensesService.findOne(id);
    let expense = this.expensesService.remove(id);

    this.gasto(dt_expense);

    return expense;
  }
}
