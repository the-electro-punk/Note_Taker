const newNoteBTN = document.getElementById("new-note")

let noteColumn = document.getElementById("list-group")

// noteList collects each new note created
let noteList = []

// noteColumn.textContent = noteList

newNote = () => {
    console.log('button pressed')
    // this collects the data inputted
    let noteTitle = document.getElementById('noteInput')
    let noteText = document.getElementById("noteContent")
    // if (noteTitle.value & noteText.value != null) {

        // this creates an HTML element containing the inputted data
        // if (noteTitle.value != '' && noteText != '') {
            for (let i = 0; i < noteList.length; i++ ) {
                newNote = noteTitle.value + ':' + '\n' + noteText.value
                noteList.push(newNote)
                console.log("note list is " + noteList)
                noteColumn.textContent = noteList
                console.log("noteColumn is " + noteColumn)
            }
        // }

        // var new_note_data = noteText.value
        // if(noteList.getItem('data')==null){
        //     noteList.setItem('data', '[]')
        // }
        // var old_note_data = JSON.parse(noteList.getItem('data'))
        // old_note_data.push(new_note_data)

        // noteList.setItem('data', JSON.stringify(old_note_data))
        // console.log('current storage = ' +window.storage)

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