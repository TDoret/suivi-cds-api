import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {databaseProviders} from './database/database.providers';
import {ClientModule} from './client/client.module';
import {TaskModeModule} from './task-mode/task-mode.module';

@Module({
  imports: [ClientModule, TaskModeModule],
  controllers: [AppController],
  providers: [...databaseProviders],
})
export class AppModule {}
