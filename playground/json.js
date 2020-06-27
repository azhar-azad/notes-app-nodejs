const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof note);
console.log(note);
console.log(note.title);



// var obj = {
//     name: 'Azad',
//     age: 27,
//     'addr': 'Dhaka'
// };
//
// var stringObj = JSON.stringify(obj);
//
// console.log(typeof obj);
// console.log(typeof stringObj);
//
// console.log(obj);
// console.log('stringObj' + stringObj);

// var personString = '{"name": "Azad", "age": 27}';
// var person = JSON.parse(personString);
//
// console.log(typeof personString);
// console.log(typeof person);
//
// console.log('str: ' + personString);
// console.log(person);
