import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { Usuarios } from 'src/usuarios/schemas/usuarios.schema';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(Usuariosname: string, password: string): Promise<Partial<Usuarios>> {
    const user = await this.authService.validateUser(Usuariosname, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
