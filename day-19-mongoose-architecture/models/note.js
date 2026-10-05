const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        trim: true,
    },
    isDone: {
        type: Boolean,
        default: false,
    }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
