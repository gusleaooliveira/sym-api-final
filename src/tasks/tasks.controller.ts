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
  Logger,
} from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth-guard";
import { Cron } from "@nestjs/schedule";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags("tasks")
@Controller("tasks")
export class TasksController {
 
  
}
