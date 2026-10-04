const express = require('express');
const mongoose = require('mongoose');
const Note = require('./models/note');

require('dotenv').config();

const app = express();
app.use(express.json());
const port = 3000;


app.post('/notes', async (req, res) => {
    try {
        const newNote = await Note.create({
            content: req.body.content
        });

        res.status(201).json(newNote);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


app.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.get('/notes/:id', async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json(note);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.patch('/notes/:id', async (req, res) => {
    try {
        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            { 
                isDone: req.body.isDone,
            },
            { new: true, runValidators: true }
        );
        if (!updatedNote) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json(updatedNote);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


app.delete('/notes/:id', async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
            return res.status(404).json({ error: 'Note not found' });
        }
        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

mongoose.connect(process.env.MONGODB_URI, {
    dbName: `fullStackJourney`
})
.then(() => {
    console.log('Connected to MongoDB');

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});