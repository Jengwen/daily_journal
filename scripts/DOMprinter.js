import makeJournalEntryComponent from "./singleJournalEntry.js"
// Build print to DOM function

const renderJournalEntries = (entries) =>{
    let journalEntries = ""
    const entryLog = document.querySelector(".entryLog")
    for (let i=0; i < entries.length; i++){
     journalEntries += makeJournalEntryComponent.buildJournalEntryCard(entries[i])
     entryLog.innerHTML = journalEntries
    }
 }

export default renderJournalEntries