import { NestFactory } from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import { AppModule } from './app.module';
import {CorsOptions} from '@nestjs/common/interfaces/external/cors-options.interface';
import {configure, getLogger} from 'log4js';
import * as config from 'config';
import * as shell from 'shelljs';

async function configureLogging() {
    shell.mkdir('-p', 'logs');
    configure(config.get('log4js'));
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
        methods: ['GET', 'POST', 'PUT', 'HEAD', 'OPTIONS'],
    };

    const options = new DocumentBuilder()
        .setTitle('suivi-cds')
        // .setDescription(description)
        // .setVersion(version)
        // .setBasePath(prefix)
        .addTag('Client')
        .addTag('Task mode')
        // .addBearerAuth( 'Authorization')
        .setSchemes(config.get('server.scheme'))
        .build();

    // Define PORT & HOST
    const port: number = parseInt(process.env.PORT, 10) || parseInt(config.get('server.port'), 10);
    const host: string = process.env.HOST || config.get('server.host');

    const app = await NestFactory.create(AppModule, nestApplicationOptions);

    app.enableCors(corsOptions);
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/docs', app, document);

    await app.listen(port);
}

configureLogging();
bootstrap();
