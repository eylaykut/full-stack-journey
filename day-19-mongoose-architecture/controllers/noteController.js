const Note = require('../models/note');

async function createNote(req, res) {
    try {
        const newNote = await Note.create({
            content: req.body.content
        });
        res.status(201).json(newNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function getAllNotes(req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function getNoteById(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function updateNote(req, res) {
    try {
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!updatedNote) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

async function deleteNote(req, res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
            return res.status(404).json({ error: "Note not found" });
        }
        res.status(200).json({ message: "Note deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote
}
