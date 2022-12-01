import { UsersModule } from '../users/users.module';
import { Module } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule, UsersModule],
  providers: [SessionService],
  controllers: [SessionController]
})
export class SessionModule {}
