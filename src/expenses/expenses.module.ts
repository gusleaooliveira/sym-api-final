import { Module } from "@nestjs/common";
import { ExpensesService } from "./expenses.service";
import { ExpensesController } from "./expenses.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Expense } from "./entities/expense.entity";
import { RevenuesModule } from "src/revenues/revenues.module";
import { AlertsModule } from "src/alerts/alerts.module";
import { MailModule } from "src/mail/mail.module";
import { UsersModule } from "src/users/users.module";

@Module({
  imports: [
    ExpensesModule,
    RevenuesModule,
    AlertsModule,
    MailModule,
    UsersModule,
    TypeOrmModule.forFeature([Expense]),
  ],
  controllers: [ExpensesController],
  providers: [ExpensesService],
  exports: [ExpensesService, ExpensesModule],
})
export class ExpensesModule {}
