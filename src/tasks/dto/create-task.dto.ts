import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreateTaskDto {
    @ApiProperty({ type: String, description: 'título' })
    title: string;

    @ApiProperty({ type: String, description: 'descrição' })
    description: string;

    @ApiProperty({ type: Boolean, description: 'status' })
    status: boolean;

    @ApiProperty({ type: Boolean, description: 'estrela' })
    star: boolean;

    @ApiProperty({ type: String, description: 'prioridade' })
    priority: string;
}
