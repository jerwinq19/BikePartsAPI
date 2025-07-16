const sql = require('sqlite3').verbose()

const db = new sql.Database('./bike_parts.db', (err) => {
    if (err) return console.log(err)

    console.log("Database Created!")
})


db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS inventory (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price INTEGER NOT NULL,
            quantity INTEGER NOT NULL
        )
    `)
})


module.exports = db