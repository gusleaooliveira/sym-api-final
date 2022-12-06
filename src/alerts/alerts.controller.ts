import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Put,
} from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/jwt-auth-guard";
import { AlertsService } from "./alerts.service";
import { CreateAlertDto } from "./dto/create-alert.dto";
import { UpdateAlertDto } from "./dto/update-alert.dto";

@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@ApiTags("alerts")
@Controller("alerts")
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) { }

  @Post()
  create(@Body() createAlertDto: CreateAlertDto) {
    return this.alertsService.create(createAlertDto);
  }

  @Get("/all/:user_id")
  findAll(@Param("user_id") id: number) {
    return this.alertsService.findAllByUser(id);
  }

  @Get(":user_id")
  findOne(@Param("user_id") id: number) {
    return this.alertsService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: number, @Body() updateAlertDto: UpdateAlertDto) {
    return this.alertsService.update(id, updateAlertDto);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.alertsService.remove(id);
  }
}
