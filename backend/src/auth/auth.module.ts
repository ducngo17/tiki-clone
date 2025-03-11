import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    JwtModule.register({
      secret: 'abc123',
      signOptions: {expiresIn: '1h'}
    }), UsersModule
  ], //import UsersModule to use it in auth module
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
