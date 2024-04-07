import { UsuariosService } from './usuarios.service';
import { Usuarios } from './schemas/usuarios.schema';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    findAll(response: any): Promise<void>;
    findOne(id: string, response: any): Promise<void>;
    create(usuario: Usuarios, response: any): Promise<void>;
    update(id: string, usuario: Usuarios, response: any): Promise<void>;
    delete(id: string, response: any): Promise<void>;
}
