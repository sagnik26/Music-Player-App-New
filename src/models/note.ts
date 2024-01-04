import { Schema, model } from "mongoose";

export interface NoteDocument {
    title: string;
    description?: string;
}

const note = {
    title: "",
    description: ""
}

const noteSchema =  new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        required: false
    }
})

export default model<NoteDocument>("Note", noteSchema);
