import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CustomersModule } from './customers/customers.module';
import { VendorsModule } from './vendors/vendors.module';
import { ComunidadModule } from './comunidad/comunidad.module';

@Module({
  imports: [CustomersModule, VendorsModule, ComunidadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
