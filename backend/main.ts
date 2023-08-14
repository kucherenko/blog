import * as i18n from 'i18n';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

i18n.configure({
    locales: ['en', 'fr'],
    directory: __dirname + '/locales',
    defaultLocale: 'en',
    objectNotation: true,
    updateFiles: false,
});
i18n.init();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
