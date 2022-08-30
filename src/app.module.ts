import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HandsomeModule } from './handsome/handsome.module';

@Module({
  imports: [HandsomeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
