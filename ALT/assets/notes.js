const newNoteBTN = document.getElementById("new-note")


const noteColumn = document.getElementById("list-container")

let noteList = []
let currentNotes = window.storage
noteColumn.textContent = noteList

newNote = () => {
    let noteTitle = document.getElementById('noteInput')
    let noteText = document.getElementById("noteContent")
    // if (noteTitle.value & noteText.value != null) {
        document.createElement('p')
        newNote = noteTitle.value + '\n' + noteText.value
        noteList.push(newNote)
        console.log(noteList)


        var new_note_data = noteText.value
        // if(noteList.getItem('data')==null){
        //     noteList.setItem('data', '[]')
        // }
        var old_note_data = JSON.parse(noteList.getItem('data'))
        old_note_data.push(new_note_data)

        noteList.setItem('data', JSON.stringify(old_note_data))
        console.log('current storage = ' +window.storage)

        // storage()
    // }
}

// storage = () => {
//     var new_note_data = noteText.value
//     if(noteList.getItem('data')==null){
//         noteList.setItem('data', '[]')
//     }
//     var old_note_data = JSON.parse(noteList.getItem('data'))
//     old_note_data.push(new_note_data)

//     noteList.setItem('data', JSON.stringify(old_note_data))
//     console.log('current storage = ' +window.storage)
// }

newNoteBTN.addEventListener('click', newNote)