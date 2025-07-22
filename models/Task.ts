import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    blogName: String,
    blogDesc: String,
})

export const Task = mongoose.models.Task || mongoose.model('Task', TaskSchema);