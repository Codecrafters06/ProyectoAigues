import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsuariosService } from 'src/usuarios/usuarios.service';
import { JwtService } from '@nestjs/jwt';
import { Usuarios } from 'src/usuarios/schemas/usuarios.schema';
import { compare } from 'bcrypt';
import { Types } from 'mongoose';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsuariosService,
    private jwtService: JwtService,
  ) {}

  async verifyPassword(password: string, hash: string) {
    return compare(password, hash);
  }

  async validateUser(name: string, pass: string) {
    const user = await this.userService.findOne(name);
    let passwordVerified: boolean;
     
    if (user) passwordVerified = await this.verifyPassword(pass, user.password);
    if (!user|| !passwordVerified) 
      throw new UnauthorizedException('Usuario no encontrado');

      const { password, ...result } = user;
    return result;
  }
    // const passwordsEquals = await this.verifyPassword(pass, user.password);
    // if (!passwordsEquals) {
    //   throw new UnauthorizedException('Contraseña incorrecta');
    
    
    

  async signIn(user: Usuarios) {
    const payload = { name: user.name, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}