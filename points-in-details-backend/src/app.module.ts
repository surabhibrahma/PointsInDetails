import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBQueryController } from './dbquery.controller';
import { DBQueryService } from './dbquery.service';

@Module({
  imports: [HttpModule.register({
    timeout: 5000,
    maxRedirects: 5,
  })],
  controllers: [AppController,DBQueryController],
  providers: [AppService,DBQueryService],
})
export class AppModule {}
