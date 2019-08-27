// fetch journal entries from JSON server
const apiEntries ={
getAllEntries: () => {
return fetch("http://localhost:3000/entries") // Fetch from the API
    .then(response => response.json())  // Parse as JSON
    .then(journalEntrytoPrint =>{

    // What should happen when we finally have the array?
//    call print to the DOM function here
    renderJournalEntries(journalEntrytoPrint)
})
}
}
