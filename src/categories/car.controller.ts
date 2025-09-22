import { Controller, Get, Patch, Delete, Param, Post, Body } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  async create(@Body() newCar: CreateCarDto) {
    return this.carService.create(newCar);
  }

  //consultar un carro por id
  @Get (':id')
  findById(@Param('id') id:string){
    return this.carService.findById(parseInt(id))
  }
  
  @Get()
  findAll(){
    return this.carService.findAll()
  }

  @Delete(':id')
  remove(@Param('id') id:string){
  return this.carService.delete(parseInt(id));
  }
}
