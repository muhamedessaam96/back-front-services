import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { Strategy as OAuth2Strategy } from 'passport-oauth2';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'oauth2' })],
  providers: [AuthService, OAuth2Strategy],
  controllers: [AuthController],
})
export class AuthModule {}
