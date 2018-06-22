import {Document} from 'mongoose';

export interface ITaskMode extends Document {
    readonly name: string;
    readonly ratio: number;
    readonly active: boolean;
}