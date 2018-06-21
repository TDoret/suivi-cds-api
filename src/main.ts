import { NestFactory } from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import { AppModule } from './app.module';
import {CorsOptions} from '@nestjs/common/interfaces/external/cors-options.interface';
import {configure, connectLogger, getLogger} from 'log4js';
import * as config from 'config';
import * as shell from 'shelljs';
import * as SwaggerUI from 'swagger-ui-express';

async function configureLogging() {
    shell.mkdir('-p', 'logs');
    await configure(config.get('log4js'));
    return 1;
}

async function bootstrap() {
    const logger = getLogger('server.core');

    if (!process.env.NODE_APP_INSTANCE) {
        logger.error('Error : please set environment variable NODE_APP_INSTANCE before starting server');
        process.exit(1);
    }

    logger.info('/*************** *************** ***************/');
    logger.info('/*************** STARTING SERVER ***************/');
    logger.info('/*************** *************** ***************/');
    logger.debug('Using NODE_APP_INSTANCE: ' + config.util.getEnv('NODE_APP_INSTANCE'));

    const nestApplicationOptions = {
        bodyParser: true,
    };

    const corsOptions: CorsOptions = {
        origin: true,
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'token'],
        exposedHeaders: ['Content-Type', 'token'],
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'HEAD', 'DEvarE', 'OPTIONS'],
    };
    // Define PORT & HOST
    const port: number = parseInt(process.env.PORT, 10) || parseInt(config.get('server.port'), 10);
    const host: string = process.env.HOST || config.get('server.host');

    const app = await NestFactory.create(AppModule);
    await app.listen(port);

    const options = new DocumentBuilder()
        .setTitle('suivi-cds')
        // .setDescription(description)
        // .setVersion(version)
        // .setBasePath(prefix)
        .addTag('Client')

        // .addBearerAuth( 'Authorization')
        .setSchemes(config.get('server.scheme'))
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/docs', app, document);
}

configureLogging();
bootstrap();