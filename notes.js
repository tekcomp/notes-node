//console.log('Starting note.js');

const fs = require('fs');

var fetchnotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    }   catch(e){
        return[];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote =(title, body) => {
    var notes = fetchnotes();
    var note ={
        title,
        body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    //console.log('Getting all notes');
    return fetchnotes();
}

var getNote = (title) => {
    console.log('Fetching ' + title +' note');
    //fetch notes
    var notes = fetchnotes();

    //filter notes, removing the one with tile argument
    var filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
};

var RemoveNote = ( title) => {
    // @@@ Removing a Note - Tutorial timestamp 8:37Min @@

    //fetch notes
    var notes = fetchnotes();

    //filter notes, removing the one with tile argument
    var filteredNotes = notes.filter((note) => note.title !== title);
   
    //save new notes array
    saveNotes(filteredNotes);

    // if length of note filtered length is equal to note passed then return true, else false
    return notes.length !== filteredNotes.length;

};

var logNote = (note) =>{
    debugger;
    //DRY = Dont Repeat Yourself
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    RemoveNote,
    logNote
};