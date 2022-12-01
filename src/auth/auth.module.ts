import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { Exeptions } from './auth.exeptions';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'loremPass',
      signOptions: { expiresIn: '24h' },
    }),
    PassportModule,
    UsersModule,
  ],
  providers: [JwtStrategy, LocalStrategy, AuthService, Exeptions],
  exports: [AuthService, JwtModule, Exeptions],
})
export class AuthModule { }
