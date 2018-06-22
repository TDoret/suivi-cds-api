import {TaskModeSchema} from './schemas/task-mode.schema';

export const taskModeProviders = [
    {
        provide: 'TaskModeModelToken',
        useFactory: mongoose => mongoose.connection.model('TaskMode', TaskModeSchema),
        inject: ['DbToken'],
    },
];