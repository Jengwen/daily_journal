// build a function to create a journal entry

const makeJournalEntryComponent = {
   buildJournalEntryCard: (singleJournalObject) => {
    // Create your own HTML structure for a journal entry
       return `
   <section>
   <div id="date">${singleJournalObject.date}</div>
   <div id="concept">${singleJournalObject.concept}</div>
   <div id="jEntry">${singleJournalObject.jEntry}</div>
   <div id="mood">${singleJournalObject.mood}</div>
   </section>
       `;
   }}
   export default makeJournalEntryComponent;