import { Controller, Get, Post, Body } from '@nestjs/common';
import { CarService } from './car.service';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Post()
  async create(@Body() newCar: CreateCarDto) {
    return this.carService.create(newCar);
  }

  
}
