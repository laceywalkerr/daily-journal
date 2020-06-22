const journalEntry = [
        {
        title: "array methods",
        date: "06-22-20",
        mood: "tired",
        entry: "trying to learn about array methods still"
    },

    {
        title: "array methods",
        date: "06-22-20",
        mood: "tired",
        entry: "trying to learn about array methods still"
    }
]




/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
    <section class="makeJournalEntryComponent">
    <div class="journalEntry">
        Title: ${journalEntry.title}
        Date: ${journalEntry.date}
        Mood: ${journalEntry.mood}
        Entry: ${journalEntry.entry}
    </div>
</section>
    `
}




/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {

}

// Invoke the render function
renderJournalEntries(journalEntry)