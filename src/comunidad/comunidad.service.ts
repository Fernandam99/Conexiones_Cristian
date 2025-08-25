
import { Body, Injectable } from '@nestjs/common';
import { Comunidad } from './entities/comunidad.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ComunidadService {

  constructor(
    private prisma: PrismaService
  ){}

    //private: solo se puede usar al iinterior de la clase con this


    //metodos:
    // CRUD: select * from comunidad
    //this:acceder a algo private en la clase
    findAll (){
      return this.prisma.comunidad.findMany()
    }

    //buscar la comunidad por id:
    findOne(id:number) {
      
    }


//Añadir el arreglo de comunidad
//la comunidad que esta llegando al body

create(body){
  
}

remove (id:number){

}

}