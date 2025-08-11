import { Injectable } from '@nestjs/common';
import { CreateGamificacionDto } from './dto/create-gamificacion.dto';
import { UpdateGamificacionDto } from './dto/update-gamificacion.dto';
import { Gamificacion } from './entities/gamificacion.entity';

@Injectable()
export class GamificacionService {
  
      private gamificaciones: Gamificacion [] = [
          {
            id_gamificacion: 1,
            id_usuario: 101,
            logro: "Primer inicio de sesión",
            puntos: 50,
            insignia: "Explorador Inicial",
            fecha_obtencion: new Date()
          },
          {
            id_gamificacion: 2,
            id_usuario: 102,
            logro: "Completar 5 tareas",
            puntos: 150,
            insignia: "Productividad en marcha",
            fecha_obtencion: new Date()
          },
          {
             id_gamificacion: 3,
            id_usuario: 103,
            logro: "Participar en un reto semanal",
            puntos: 200,
            insignia: "Competidor Activo",
            fecha_obtencion: new Date()
           }
            
      ]

  findAll(): Gamificacion[] {
    return this.gamificaciones;
  }

  findOne(id: number) {
    return this.gamificaciones.find(g => g.id_gamificacion === id);
  }
  create(body: Gamificacion): Gamificacion {
    this.gamificaciones.push(body);
    return body;
  }
  
  remove(id: number): string {
  // filter: retorna un nuevo arreglo excluyendo el elemento con ese id_gamificacion
  this.gamificaciones = this.gamificaciones.filter(
    gamificacion => gamificacion.id_gamificacion !== id
  );

  return "Elemento eliminado";

  }
  
}
