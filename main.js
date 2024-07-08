const arr = require('./sssss/arrmod')
const express = require('express')

const app = express()

const PORT = 5300

app.get('/', (req, res)=> {
    res.json(arr)
})

app.listen(PORT, ()=> {
    console.log(PORT)
})
