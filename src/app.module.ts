import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ProvidersModule } from './providers/providers.module';

@Module({
  imports: [PrismaModule, ProvidersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
