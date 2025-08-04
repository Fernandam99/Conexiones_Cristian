import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';

@Controller('customers')
export class CustomerController {

// endpoint: punto de entrada 
// que otro proyecto va a utilizar y va a recibir request HTTP de 
// cualquier proyecto 
// Se programa con una funcion  
// con sintaxis del lenguaje de programación 
@Get()
consultarCustomer() {
return "Aqui se mostraran todos los customers "
}

@Post()crearCustomer() {
return "Aqui se creara un nuevo customer"
}

}
