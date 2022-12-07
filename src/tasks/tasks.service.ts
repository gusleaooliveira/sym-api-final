import { Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { InjectRepository } from "@nestjs/typeorm";
import { AlertsService } from "src/alerts/alerts.service";
import { DashboardService } from "src/dashboard/dashboard.service";
import { ExpensesService } from "src/expenses/expenses.service";
import { RevenuesService } from "src/revenues/revenues.service";
import { Repository } from "typeorm";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { Task } from "./entities/task.entity"; 

@Injectable()
export class TasksService {
  constructor(
    private readonly alertService: AlertsService,
    private readonly dashboardService: DashboardService,
    private readonly expensesService: ExpensesService,
    private readonly revenuesService: RevenuesService,
  ) {
    
    
   }

 

    
 
}
