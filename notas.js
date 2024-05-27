document.addEventListener('DOMContentLoaded', function () {
    const noteInput = document.getElementById('note');
    const saveButton = document.getElementById('saveButton');
    const notesList = document.getElementById('notesList');

    // Cargar notas guardadas al iniciar
    loadNotes();

    saveButton.addEventListener('click', function () {
        const noteText = noteInput.value.trim();
        if (noteText !== "") {
            saveNote(noteText);
            noteInput.value = '';
        }
    });

    function saveNote(note) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.push(note);
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
    }

    function loadNotes() {
        displayNotes();
    }

    function displayNotes() {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesList.innerHTML = '';
        notes.forEach((note, index) => {
            const noteItem = document.createElement('li');
            noteItem.textContent = note;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.className = 'delete-button';
            deleteButton.addEventListener('click', function () {
                deleteNote(index);
            });

            noteItem.appendChild(deleteButton);
            notesList.appendChild(noteItem);
        });
    }

    function deleteNote(index) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        displayNotes();
    }
});
