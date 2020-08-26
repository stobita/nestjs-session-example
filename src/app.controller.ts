import {
  Controller,
  Get,
  Post,
  Res,
  UseGuards,
  Request,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { LoginGuard } from './common/guards/login.guard';
import { AuthenticatedGuard } from './common/guards/authenticated.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/')
  index() {
    return;
  }

  @UseGuards(LoginGuard)
  @Post('/login')
  Login(@Req() req): void {
    console.log(req.user);
    return;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/home')
  getHome() {
    return this.appService.getHello();
  }

  @UseGuards(AuthenticatedGuard)
  @Get('/profile')
  getProfile() {
    return;
  }

  @Get('/logout')
  logout(@Request() req, @Res() res: Response): void {
    req.logOut();
    res.redirect('');
  }
}
