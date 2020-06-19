const journalEntry [
        {
        title: "title",
        date: "date",
        mood: "mood",
        entry: "idk"
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
renderJournalEntries(journalEntries)


