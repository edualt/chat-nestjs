import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { ChatGateWayModule } from './chat/chat.module';

@Module({
  imports: [ChatGateWayModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
