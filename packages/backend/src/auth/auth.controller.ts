import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get('login')
  @UseGuards(AuthGuard('oauth2'))
  async login() {}

  @Get('callback')
  @UseGuards(AuthGuard('oauth2'))
  async callback(@Request() req) {
    return req.user;
  }
}
