import { ApiProperty } from '@nestjs/swagger';

export class SignInDTO {
    @ApiProperty({ type: String, description: 'email' })
    email: string;

    @ApiProperty({ type: String, description: 'senha' })
    password: string;
}
