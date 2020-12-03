//const noteModel = require('../models/Notes.js');

const express = require('express');
const noteModel = require('../models/NotesModel.js');
const app = express();
 



app.post('/note', async (req, res) => {
    const note = noteModel(req.body);
    
    try {
    await note.save();
    res.send(note);
    } catch (err) {
    res.status(500).send(err);
    }
    });


app.get('/notes',async (req, res) => {
    const notes = await noteModel.find({});
    // Validate request
 
    //TODO - Write your code here to returns all note
try{
    res.send(notes);
    } catch (err){
    res.status(500).send(err);
    }
});


app.get('/notes/:noteId',async (req, res) => {
   
    try{
        const note = await noteModel.findById(req.params.noteId, req.body);
        res.send(note);
        } catch (err){
        res.status(500).send(err);
        }
});
// See if ?=? is required, but this is not essential

app.patch('/notes/:noteId',async (req, res) => {
    // Validate request
    
    //TODO - Write your code here to update the note using noteid
    try{
        await noteModel.findByIdAndUpdate(req.params.noteId, req.body);
        await noteModel.save();
        res.send(notes);
        } catch (err){
        res.status(500).send(err);
        }
});


app.delete('/notes/:noteId',async (req, res) => {
    // Validate request
    /* if(!req.body.content) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    } */
    //TODO - Write your code here to delete the note using noteid
    try{
        const note = await noteModel.findByIdAndDelete(req.params.noteId);

        if(!note){
            res.status(404).send('No item found');
        }
        res.status(200).send()
    } catch (err){
        res.status(500).send(err);
    }
});

module.exports = app;