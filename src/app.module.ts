import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { HandsomeModule } from './handsome/handsome.module';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'HANDSOME_MAN',
      useValue: 'HAO',
    },
  ],
})
export class AppModule {}
