import { Injectable } from '@nestjs/common';
import { Exeptions } from './auth.exeptions';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) { }

    async validateUser({ email, password }: { email: string; password: string }) {
        const user = await this.usersService.findByEmail(email);
        if (!user) Exeptions.EmailIsNotFound(); 
        // const isMatch = await bcrypt.compare(password, user.password);
        const isMatch = password == user.password ? true : false
        if (!isMatch) Exeptions.InvalidPassword();
        return !!user && isMatch ? user : null;
    }

    async singUp(user: CreateUserDto) {
        const existingEmail = await this.usersService.findByEmail(user.email);
        if (!!existingEmail === true) Exeptions.EmailAlreadyRegistered();

        return await this.usersService.create(user);
    }
}
