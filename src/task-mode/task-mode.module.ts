import {DatabaseModule} from '../database/database.module';
import {Module} from '@nestjs/common';
import {taskModeProviders} from './task-mode.providers';
import {TaskModeController} from './task-mode.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [TaskModeController],
    providers: [...taskModeProviders],
})

export class TaskModeModule /*implements NestModule*/ {
    // public configure(consumer: MiddlewaresConsumer) {
    //     consumer.apply(JwtMiddleware).forRoutes(
    //         {path: '/user', method: RequestMethod.GET},
    //         {path: '/user/*', method: RequestMethod.GET},
    //
    //         {path: '/user', method: RequestMethod.PUT},
    //         {path: '/user/*', method: RequestMethod.PUT},
    //
    //         {path: '/user', method: RequestMethod.DELETE},
    //         {path: '/user/*', method: RequestMethod.DELETE},
    //     );
    // }
}