
import { Body, Injectable } from '@nestjs/common';
import { Comunidad } from './entities/comunidad.entity';

@Injectable()
export class ComunidadService {

    //private: solo se puede usar al iinterior de la clase con this

    private comunidades: Comunidad[] = [
        {
            id: 1,
            name: "Toyota",
            description: "Marca Japonesa",
            createdAt: new Date
        },
        {
            id: 2,
            name: "BYD",
            description: "Vehiculos electronicos",
            createdAt: new Date
        }
        
    ]

    //metodos:
    // CRUD: select * from comunidad
    //this:acceder a algo private en la clase
    findAll (): Comunidad[] {
        return this.comunidades;
    }

    //buscar la comunidad por id:
    findOne(id:number) : Comunidad | any{
      let c = this.comunidades.find(function(comunidad){
        return comunidad.id === id
      })
      //si la encuentro la retorno
      return c;
    }


//Añadir el arreglo de comunidad
//la comunidad que esta llegando al body

create(body){
  this.comunidades.push(body)
  return body;
}

remove (id:number){
  //fliter:retornar un nuevo arreglo con un elemento
  //que cumplan la condicidional
  let nuevoArreglo = this.comunidades.filter(
    function(comunidades){
      return comunidades.id !== id
    }
  )
  return "Elemento eliminado"
}

}