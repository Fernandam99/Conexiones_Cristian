import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GamificacionService } from './gamificacion.service';
import { CreateGamificacionDto } from './dto/create-gamificacion.dto';
import { UpdateGamificacionDto } from './dto/update-gamificacion.dto';

@Controller()
export class GamificacionController {
  constructor(private readonly gamificacionService: GamificacionService) {}
@Post()
  create(@Body() body: CreateGamificacionDto) {
    return this.gamificacionService.create(body);
  }

  @Get()
  findAll() {
    return this.gamificacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gamificacionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return `Aquí se va a actualizar la gamificación con ID: ${id}`;
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return {
      "Succes": true,
      "mensaje": this.gamificacionService.remove(+id)
    };
  }
}
