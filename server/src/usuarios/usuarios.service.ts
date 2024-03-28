import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuarios, UsuariosDocument } from './schemas/usuarios.schema';

@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuarios.name) private usuarioModel: Model<UsuariosDocument>) {}

  async findAll(): Promise<Usuarios[]> {
    const allUsers = await this.usuarioModel.find().exec();
    console.log(allUsers);
    return allUsers;
  }

  async findOne(id: string): Promise<Usuarios> {
    return this.usuarioModel.findOne({ id }).exec();
  }

  async create(usuario: Usuarios): Promise<Usuarios> {
    const newUsuario = new this.usuarioModel(usuario);
    return newUsuario.save();
  }

  async update(id: string, usuario: Usuarios): Promise<Usuarios> {
    return this.usuarioModel.findByIdAndUpdate(id, usuario, { new: true }).exec();
  }

  async delete(id: string): Promise<Usuarios> {
    return this.usuarioModel.findByIdAndDelete(id).exec();
  }
}