import { TasksModule } from './../tasks/tasks.module';
import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dashboard } from './entities/dashboard.entity';
import { ExpensesService } from 'src/expenses/expenses.service';
import { ExpensesModule } from 'src/expenses/expenses.module';
import { RevenuesModule } from 'src/revenues/revenues.module';

@Module({
  imports: [ExpensesModule, RevenuesModule,  TypeOrmModule.forFeature([Dashboard])],
  controllers: [DashboardController],
  providers: [DashboardService],
})
export class DashboardModule { }
