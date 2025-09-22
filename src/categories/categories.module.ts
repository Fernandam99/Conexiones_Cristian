import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CarService } from './car.service';
import { CarController } from './car.controller';

@Module({
  imports: [PrismaModule],
  controllers: [CategoriesController, CarController],
  providers: [CategoriesService, CarService],
})
export class CategoriesModule {}
