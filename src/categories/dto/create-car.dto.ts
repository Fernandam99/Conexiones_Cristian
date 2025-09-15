export class CreateCarDto{
    plate: string;
    release_date: Date;
    is_available: boolean;
    price: number;
    comunidad_id: number;
    category_id: number
}