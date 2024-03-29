import { Controller, Get, Res, HttpStatus, NotFoundException, Param } from '@nestjs/common';
import { EscenariosService } from './escenarios.service';

@Controller('escenarios')
export class EscenariosController {
  constructor(private readonly escenariosService: EscenariosService) {}

    @Get()
    async findAll(@Res() response){
      try {
        const allEscenarios = await this.escenariosService.findAll();
        response.status(HttpStatus.OK).json({
          data: allEscenarios
        });
      } catch (error) {
        response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
          message: 'Error al obtener usuarios',
          error: error.message
        });
      }
    }
    @Get(':id')
    async findOne(@Param('id') id: string, @Res() response) {
      try {
        const escenarios = await this.escenariosService.findOne(id);
        response.status(HttpStatus.OK).json({
          message: 'Escenario encontrado',
          data: escenarios
        });
      } catch (error) {
        if (error instanceof NotFoundException) {
          response.status(HttpStatus.NOT_FOUND).json({
            message: error.message
          });
        } else {
          response.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            message: 'Error al obtener ususrio',
            error: error.message
          });
        }
      }
      } 
    }