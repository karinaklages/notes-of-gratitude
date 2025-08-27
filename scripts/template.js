// Template for rendered notes
function getNoteTemplate(indexNote) {
    return `
    <div class="submittedContainer">
        <p class="submittedNote" style="text-transform: uppercase;">${notes[indexNote]}</p>
        <img onclick="deleteNote(${indexNote})" class="roundIcon" src="./assets/icons/delete-icon.png" alt="Delete Icon" aria-label="Delete Note">
    </div>
    `;
}