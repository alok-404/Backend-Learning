const express = require('express');

let notes = [];

const app = express();

app.use(express.json());

app.post("/notes", (req, res) => {
    console.log(req.body);
    notes.push(req.body);
    res.json({ message: "Note added successfully" });
});

app.get("/notes", (req, res) => {
    res.json({
        message: "Notes retrieved successfully",
        notes: notes    })
});

app.patch("/notes/:index", (req, res) => {
    const index = req.params.index;
    const {title , content} = req.body;
    notes[index] = {title, content};
    res.json({ message: "Note updated successfully" });
});

app.delete("/notes/:index", (req, res) => {
    const index = req.params.index;
    delete notes[index];
    res.json({ message: "Note deleted successfully" });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});