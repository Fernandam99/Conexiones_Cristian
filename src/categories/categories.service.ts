import { Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaClient } from '@prisma/client';


@Injectable()
export class CategoriesService {
  private prisma = new PrismaClient();

  // async create(createCategoryDto: CreateCategoryDto) {
  //   return this.prisma.category.create({
  //     data: createCategoryDto,
  //   });
  // }

  async create(newCategory: CreateCategoryDto) {
    return await this.prisma.category.create({
      data: {
        name : newCategory.name
      }
        });
    return newCategory;
  }

  async findAll() {
    return await this.prisma.category.findMany()
  }

  async findOne(id: number) {
    return this.prisma.category.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<any> {
    return this.prisma.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  async remove(id: number) {
  }
}
