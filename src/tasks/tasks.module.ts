import { RevenuesModule } from "src/revenues/revenues.module";
import { ExpensesModule } from "src/expenses/expenses.module";
import { AlertsModule } from "./../alerts/alerts.module";
import { Module } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { TasksController } from "./tasks.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Task } from "./entities/task.entity";
import { ScheduleModule } from "@nestjs/schedule";
import { DashboardModule } from "src/dashboard/dashboard.module";

@Module({
  imports: [
    AlertsModule,
    DashboardModule,
    ExpensesModule,
    RevenuesModule,
    ScheduleModule.forRoot(),
    TypeOrmModule.forFeature([Task]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
  exports: [TasksModule],
})
export class TasksModule { }
