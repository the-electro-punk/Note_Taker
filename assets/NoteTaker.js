const express = require('express');
const path = require('path');

const app = express();
const PORT = 3002;

let notes = []

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'notes.html'));
  });

  app.get('/api/notes', (req, res) => {
    return res.json(notes);
  });


  app.get('/api/characters/:character', (req, res) => {
    const chosen = req.params.character;
  
    console.log(chosen);
  
    for (let i = 0; i < notes.length; i++) {
      if (chosen === notes[i].routeName) {
        return res.json(notes[i]);
      }
    }
  
    return res.json(false);
  });
  

  app.post('/api/characters', (req, res) => {
    const newNotes = req.body;
  
    // BONUS: Use a RegEx Pattern to remove spaces from newCharacter
    // Your code here
  
    console.log(newNotes);
  
    characters.push(newNotes);
  
    res.json(newNotes);
  });  

  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });