import { Injectable } from '@nestjs/common';
import { CreateCarDto } from '../categories/dto/create-car.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { HttpException } from '@nestjs/common';  // Asegúrate de importar HttpException

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}


  async create(newCar: CreateCarDto) {
    // Verificar si la placa ya existe
    const existe = await this.prisma.car.findFirst({
      where: {
        plate: newCar.plate, 
      },
    });

    if (existe) {
      throw new HttpException('La placa ya existe', 400); 
    }

    else {
    // Crear el nuevo carro
    return await this.prisma.car.create({
      data: {
        plate: newCar.plate,
        release_date: new Date(newCar.release_date), 
        is_available: newCar.is_available,
        price: newCar.price,
        comunidad:{
            connect: {id: newCar.comunidad_id|
        } ,
        category: {
          connect: { id: newCar.category_id }
        }
      }
    })

    }
  }
}
