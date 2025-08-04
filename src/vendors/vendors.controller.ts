import { Controller, Get } from '@nestjs/common';

@Controller('vendors')
export class VendorsController {


@Get()
consultarVendors() {
  return "Aqui se mostraran todos los vendors";
}

}