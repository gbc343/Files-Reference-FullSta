const mongoose = require('mongoose');

//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated

const NoteSchema = new mongoose.Schema({

    noteTitle: {
    type: String,// look into if this is json
    required: true,
    trim: true,
    lowercase: true 
    },

    noteDescription: {//camal case ok?
    type: String,
    required: true,
    trim: true,
    lowercase: true
    },

    priority: {
    type: String,
    required: true,
    trim: true,
    uppercase: true
    },
    });
    
    const Note = mongoose.model("Note", NoteSchema);
    
    module.exports = Note;