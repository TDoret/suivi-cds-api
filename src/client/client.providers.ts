import {ClientPropertySchema, ClientSchema} from './schemas/client.schema';

export const clientProviders = [
    {
        provide: 'ClientModelToken',
        useFactory: mongoose => mongoose.connection.model('Client', ClientSchema),
        inject: ['DbToken'],
    },
];

export const clientPropertyProviders = [
    {
        provide: 'ClientPropertyModelToken',
        useFactory: mongoose => mongoose.connection.model('ClientProperty', ClientPropertySchema),
        inject: ['DbToken'],
    },
];