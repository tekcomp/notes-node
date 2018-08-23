//console.log("Starting app.js");

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}
const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'
}

const argv = yargs
    .command('add','Add a new note',{
        title: titleOptions,
        body: bodyOptions
    })
    .command('list','List all notes')
    .command('read','read a note',{
        title: titleOptions,
    })
    .command('remove','Remove a note',{
        title: titleOptions
    })
    .help()
    .argv;
var command = argv._[0];
//console.log(`Command: `, command);
//console.log('Yargs', argv)


if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body);
    if(_.isUndefined(note) === false){
        console.log('Note created');
        //console.log('Note with title ' + argv.title + ' body ' + argv.body + ' created');
        // console.log('--');
        // console.log(`Title: ${note.title}`);
        // console.log(`Body: ${note.body}`);
        notes.logNote(note); //call LogNote function instead multiline comment log above
    }
    else {
        console.log('Note Title already in use');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {

    console.log('GetNote: ' + argv.title);
    console.log(argv);

    var note = notes.getNote(argv.title);
    console.log(note);

    if (note) {
        console.log('Note found');
        notes.logNote(note); //call LogNote function instead multiline comment log above
    }
    else{
        console.log('Note not found');
    }

} else if (command === 'remove') {
    notes.RemoveNote(argv.title);
    var noteRemoved = notes.RemoveNote(argv.title);
    console.log(noteRemoved);

    var message = noteRemoved ? `Note was removed` : `Note not found`; //turnary operator -- condition - question - true - false
    console.log(message);

}
else {
    console.log('Command not recognized')
};



