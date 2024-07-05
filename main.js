const express = require('express')
const arr = require('/arr')

const app = express()
const PORT = 5300

app.get('/', (req, res)=> {
    res.json(arr)
})
app.listen(PORT, ()=> {
    console.log(PORT)
})