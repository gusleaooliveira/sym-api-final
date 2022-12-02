import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateAlertDto } from './create-alert.dto';

export class UpdateAlertDto extends PartialType(CreateAlertDto) {
    @ApiPropertyOptional({ type: Number, description: 'id' })
    id: number;
}
