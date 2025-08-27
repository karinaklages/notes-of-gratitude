// Variables
let notes = [ ]; 


// Functions
// Renders notes out of the array into index.html
function renderNotes() {
    let contentRef = document.getElementById("content"); 
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) { 
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}


// Adds a note with onclick in index.html
function addNote() {
    let noteInputRef = document.getElementById("noteInput");

    // If empty, abort function
    if (noteInputRef.value.trim() === "") {
        return;
    }

    if (notes.length >= 9) {
        noteInputRef.value = "";
        return;
    }

    // Saves a note, adds it to the array and clears the input-space
    notes.push(noteInputRef.value);
    renderNotes();
    noteInputRef.value = "";
}


// Deletes submitted note with onclick deleteNote(indexNote)
function deleteNote(indexNote) {
    notes.splice(indexNote, 1);

    renderNotes()
}