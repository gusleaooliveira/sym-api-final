import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreateExpenseDto {
    @ApiProperty({ type: Number, description: 'valor' })
    value: number;

    @ApiProperty({ type: Date, description: 'data' })
    date: Date;

    @ApiProperty({ type: String, description: 'tipo do gasto' })
    type: string;

    @ApiProperty({ type: String, description: 'frequencia do gasto' })
    frequency: string;

    @ApiProperty({ type: String, description: 'descricao do gasto' })
    description: string;
}
