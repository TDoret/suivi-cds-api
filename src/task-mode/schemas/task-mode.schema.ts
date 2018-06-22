import * as mongoose from 'mongoose';

export const TaskModeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    ratio: {type: Number, required: true},
    active: {type: Boolean, required: true, default: true},
});