import { HttpException, Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import e from 'express';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async create(newCar: CreateCarDto) {

    let categoria = await this.prisma.category.findFirst({
      where:{
        id: newCar.category_id
      }
    }) 

    if (!categoria){
      throw new HttpException(
        'La marca no existe', 400
      )
    }

    // Validación lógica de negocio: la placa no puede estar repetida
    const existe = await this.prisma.car.findFirst({
      where: { plate: newCar.plate },
    });

    if (existe) {
      throw new HttpException('La placa ya existe', 400);
    }

    // Crear el nuevo carro
    return await this.prisma.car.create({
      data: {
        plate: newCar.plate,
        release_date: new Date(newCar.release_date),
        is_available: newCar.is_available,
        price: newCar.price, 
        comunidad: {
          connect: { id: newCar.comunidad_id }, 
        },
        category: {
          connect: { id: newCar.category_id },
        },
      },
    });
  }

  async findById(id: number) {
    // 1. Buscar el carro por id
    const existe = await this.prisma.car.findFirst({
      where: { id: id },
    });

    // 2. Si no existe, lanzar una HTTPException
    if (!existe) {
      throw new HttpException('Carro no encontrado', 404);
    }

    // 3. Si existe, devolver el carro
    return existe;
  }

  async findAll() {
  let carros = await this.prisma.car.findMany({
    orderBy: { plate: 'asc' }
  });

  if (carros.length === 0) {
    throw new HttpException('No hay carros', 404);
  } else {
    return carros;
  }
}

  async delete(id: number){
    let existe = await this.prisma.car.findFirst({
      where:{id:id}
    })
  if (!existe){
    throw new HttpException(
      'El carro no existe', 404
    )
  }
  else{
    await this.prisma.car.delete({
      where:{id:id}
    })
    return{
      "susccess":true,
      "menssage": "El carro ha sido eliminado"
    }
  }

  }
}

