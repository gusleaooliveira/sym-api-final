import { HttpException, HttpStatus } from '@nestjs/common';

export class Exeptions {
    static EmailIsNotFound(): HttpException {
        throw new HttpException(
            {
                statusCode: 400,
                error: 'Bad Request',
                message: ['E-mail não encontrado'],
            },
            HttpStatus.BAD_REQUEST,
        );
    }

    static UserIsNotFound(): HttpException {
        throw new HttpException(
            {
                statusCode: 400,
                error: 'Bad Request',
                message: ['Usuário não encontrado'],
            },
            HttpStatus.BAD_REQUEST,
        );
    }

    static RefreshTokenInvalid(): HttpException {
        throw new HttpException(
            {
                statusCode: 400,
                error: 'Bad Request',
                message: ['Refresh token inválido.'],
            },
            HttpStatus.BAD_REQUEST,
        );
    }

    static UserIsInactive(): HttpException {
        throw new HttpException(
            {
                statusCode: 400,
                error: 'Bad Request',
                message: ['Usuário desativado'],
            },
            HttpStatus.BAD_REQUEST,
        );
    }

    static InvalidPassword(): HttpException {
        throw new HttpException(
            {
                statusCode: 400,
                error: 'Bad Request',
                message: ['Senha incorreta'],
            },
            HttpStatus.BAD_REQUEST,
        );
    }

    static IvalidSecurityAnswer(): HttpException {
        throw new HttpException(
            {
                statusCode: 400,
                error: 'Bad Request',
                message: ['Resposta de segurança incorreta'],
            },
            HttpStatus.BAD_REQUEST,
        );
    }

    static EmailAlreadyRegistered(): HttpException {
        throw new HttpException(
            {
                statusCode: 400,
                error: 'Bad Request',
                message: ['Conta de e-mail já cadastrada'],
            },
            HttpStatus.BAD_REQUEST,
        );
    }



    static UserAlreadyRegistered(): HttpException {
        throw new HttpException(
            {
                statusCode: 400,
                error: 'Bad Request',
                message: ['Usuário informado já está em uso'],
            },
            HttpStatus.BAD_REQUEST,
        );
    }

    static InvalidEmailOrCode(): HttpException {
        throw new HttpException(
            {
                statusCode: 400,
                error: 'Bad Request',
                message: ['E-mail ou código inválido'],
            },
            HttpStatus.BAD_REQUEST,
        );
    }

    static CreateMessage(message: string): HttpException {
        throw new HttpException(
            {
                statusCode: 400,
                error: 'Bad Request',
                message: [
                    message ||
                    'Sintaxe de requisição mal formada, enquadramento de mensagem de requisição inválida ou requisição de roteamento enganosa',
                ],
            },
            HttpStatus.BAD_REQUEST,
        );
    }
}