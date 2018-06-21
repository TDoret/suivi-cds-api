import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {databaseProviders} from './database/database.providers';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [...databaseProviders],
})
export class AppModule {}
