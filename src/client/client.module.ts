import {DatabaseModule} from '../database/database.module';
import {Module} from '@nestjs/common';
import {clientPropertyProviders, clientProviders} from './client.providers';
import {ClientController} from './client.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [ClientController],
    providers: [...clientProviders, ...clientPropertyProviders],
})

export class ClientModule /*implements NestModule*/ {
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