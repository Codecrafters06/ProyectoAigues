import { Controller, Post, Req, UseGuards, Get } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { Usuarios } from './usuarios/schemas/usuarios.schema';
import { Types } from 'mongoose';


@Controller()
export class AppController {
  constructor(private authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/signin')
  signIn(@Req() req: Request & { user: Usuarios & { _id: Types.ObjectId } }) {
    
    return this.authService.signIn(req.user);
  }  
}
