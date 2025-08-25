import { Module } from '@nestjs/common';
import { ComunidadService } from './comunidad.service';
import { ComunidadController } from './comunidad.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ComunidadController],
  providers: [ComunidadService],
})
export class ComunidadModule {}
