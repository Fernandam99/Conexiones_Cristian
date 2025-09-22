import { IsBoolean, IsDateString, IsDecimal, IsInt, IsNotEmpty } from "class-validator";

export class CreateCarDto {
  @IsNotEmpty({ message: 'La placa es obligatoria' })
  plate: string;

  @IsNotEmpty({ message: 'La fecha es obligatoria' })
  @IsDateString()
  release_date: string; 

  @IsNotEmpty({ message: 'El estado de disponibilidad es obligatorio' })
  @IsBoolean()
  is_available: boolean;

  @IsNotEmpty({ message: 'El precio es obligatorio' })
  @IsDecimal()
  price: number;

  @IsNotEmpty({ message: 'El ID de la comunidad es obligatorio' })
  @IsInt()
  comunidad_id: number;

  @IsNotEmpty({ message: 'El ID de la categoría es obligatorio' })
  @IsInt()
  category_id: number;
}
