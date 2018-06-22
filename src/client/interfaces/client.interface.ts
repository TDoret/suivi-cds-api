import {Document} from 'mongoose';

export interface IClient extends Document {
    readonly name: string;
    readonly clientProperty: IClientProperty[];
    readonly active: boolean;
}

export interface IClientProperty {
    readonly client_id: string;
    readonly key: string;
    readonly name: string;
    readonly desc: string;
    readonly value: string;
}