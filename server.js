require('dotenv').config()
const express = require('express')
const app = express()
const inventoryRoutes = require('./routes/inventoryRoutes')

app.use(express.json())
app.use(express.urlencoded({extended: true}))


// routes
app.use('/api', inventoryRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`The server is live at: http://localhost:${PORT}`)
})