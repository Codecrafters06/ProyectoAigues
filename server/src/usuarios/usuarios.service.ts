// import { Injectable } from '@nestjs/common';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from 'mongoose';
// import { Usuarios, UsuariosDocument } from './schemas/usuarios.schema';

// @Injectable()
// export class UsuariosService {
//   constructor(@InjectModel(Usuarios.name) private usuarioModel: Model<UsuariosDocument>) {}

//   async findAll(): Promise<Usuarios[]> {
//     const allUsers = await this.usuarioModel.find().exec();
//     console.log(allUsers);
//     return allUsers;
//   }

//   async findOne(id: string): Promise<Usuarios> {
//     return this.usuarioModel.findOne({ id }).exec();
//   }

//   async create(usuario: Usuarios): Promise<Usuarios> {
//     const newUsuario = new this.usuarioModel(usuario);
//     return newUsuario.save();
//   }

//   async update(id: string, usuario: Usuarios): Promise<Usuarios> {
//     return this.usuarioModel.findByIdAndUpdate(id, usuario, { new: true }).exec();
//   }

//   async delete(id: string): Promise<Usuarios> {
//     return this.usuarioModel.findByIdAndDelete(id).exec();
//   }
// }


import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { Usuarios, UsuariosDocument } from './schemas/usuarios.schema';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class UsuariosService {
  constructor(@InjectModel(Usuarios.name) private usuarioModel: Model<UsuariosDocument>) {}
  async findAll(): Promise<Usuarios[]> {
return this.usuarioModel.find().exec();
  }
  async findOne(id: string): Promise<Usuarios> {
    const user = await this.usuarioModel.findById(id).exec();
    if (!user) {
      throw new NotFoundException('Usuário no encontrado');
    }
    return user;
  }
  async create(usuario: Usuarios): Promise<Usuarios> {
    const newUser = new this.usuarioModel(usuario);
    return newUser.save();
  }
  async update(id: string, usuario: Usuarios): Promise<Usuarios> {
    const updatedUser = await this.usuarioModel.findByIdAndUpdate(id, usuario, { new: true }).exec();
    if (!updatedUser) {
      throw new NotFoundException('Usuário no encontrado');
    }
    return updatedUser;
  }
  async delete(id: string): Promise<Usuarios> {
    const deletedUser = await this.usuarioModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new NotFoundException('Usuário no encontrado');
    }
    return deletedUser;
  }
}