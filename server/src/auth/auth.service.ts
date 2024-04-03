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

  async validateUser(name: string, pass: string): Promise<Partial<Usuarios>> {
    const user = await this.userService.findOne(name);

    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    const passwordsEquals = await this.verifyPassword(pass, user.password);
    if (!passwordsEquals) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }
    
    const { password: _, ...result } = user;

    return result;
  }

  async signIn(user: Usuarios & { _id: Types.ObjectId }) {
    const payload = { name: user.name, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}