import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({ type: String, description: 'nome' })
    name: string;

    @ApiProperty({ type: String, description: 'email' })
    email: string;

    @ApiProperty({ type: String, description: 'password' })
    password: string;
}
