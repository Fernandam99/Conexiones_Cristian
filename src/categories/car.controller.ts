import { Module } from '@nestjs/common';
import { CarController } from '../brands/car.controller';
import { CarService } from '../categories/car.service'; 
import { PrismaService } from 'src/prisma/prisma.service';  

@Module({
  controllers: [CarController],  
  providers: [CarService, PrismaService],  
})
export class CarModule {}
