import { ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { CreateExpenseDto } from './create-expense.dto';

export class UpdateExpenseDto extends PartialType(CreateExpenseDto) {
    @ApiPropertyOptional({ type: Number, description: 'id' })
    id: number;
}
