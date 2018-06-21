import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

declare const module: any;

async function bootstrap() {
  const port: number = parseInt(process.env.PORT, 10) || parseInt(config.get('server.port'), 10);
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
