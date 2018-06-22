import * as mongoose from 'mongoose';

export const ClientPropertySchema = new mongoose.Schema({
    client_id: {type: String, required: true},
    key: {type: String, required: true},
    name: {type: String, required: true},
    desc: {type: String, required: true},
    value: {type: String, required: true},
});

export const ClientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    clientProperty: {type: [{type: ClientPropertySchema, required: false}]},
    active: {type: Boolean, required: true, default: true},
});