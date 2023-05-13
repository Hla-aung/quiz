import mongoose, { Schema } from "mongoose";

const modleSchema = new Schema({
    questions: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

export const Questions = mongoose.model('Questions', modleSchema)
