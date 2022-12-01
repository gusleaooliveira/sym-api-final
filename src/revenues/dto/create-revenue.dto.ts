import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreateRevenueDto {
    @ApiProperty({ type: Number, description: 'valor' })
    value: number;

    @ApiProperty({ type: Date, description: 'data' })
    date: Date;

    @ApiProperty({ type: String, description: 'tipo de recebimento' })
    type: string;

    @ApiProperty({ type: String, description: 'frequencia do recebimento' })
    frequency: string;
}
