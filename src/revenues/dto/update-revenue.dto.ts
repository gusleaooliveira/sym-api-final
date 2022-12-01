import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateRevenueDto } from './create-revenue.dto';

export class UpdateRevenueDto extends PartialType(CreateRevenueDto) {
    @ApiPropertyOptional({ type: Number, description: 'id' })
    id: number;
}
