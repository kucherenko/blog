import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Context } from 'nestjs-telegraf';
import { Link } from './link.entity';

@Injectable()
export class TelegramBotService {
  constructor(
    @InjectRepository(Link)
    private linkRepository: Repository<Link>,
  ) {}

  async handleNewLink(ctx: Context) {
    const { text } = ctx.message;
    const { entities } = ctx.message;

    const urlEntity = entities.find((entity) => entity.type === 'url');
    if (!urlEntity) {
      ctx.reply('Invalid link format.');
      return;
    }

    const startIndex = urlEntity.offset;
    const endIndex = urlEntity.offset + urlEntity.length;
    const url = text.substring(startIndex, endIndex);
    const comment = text.substring(endIndex).trim();

    const link = this.linkRepository.create({ url, comment });
    try {
      await this.linkRepository.save(link);
      ctx.reply('Link saved successfully!');
    } catch (error) {
      ctx.reply('Failed to save the link.');
    }
  }
}
