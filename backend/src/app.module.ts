import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Link } from './link.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramBotService } from './telegram-bot.service';

@Module({
  imports: [TypeOrmModule.forRoot(), TelegrafModule.forRoot('YOUR_TELEGRAM_BOT_TOKEN'), TypeOrmModule.forFeature([Link])],
  controllers: [AppController],
  providers: [AppService, TelegramBotService],
})
export class AppModule {}
