 

import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreateAlertDto {

    @ApiProperty({ type: Number, description: 'id do usuário' })
    user_id: number;
  
    @ApiProperty({ type: Number, description: 'valor do limite' })
    value: number;
  
 
}
