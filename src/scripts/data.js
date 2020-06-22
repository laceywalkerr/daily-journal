const API = {
    getJournalEntry () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }
}



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
