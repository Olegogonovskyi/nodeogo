const {arrtwo} = require('./sssss/arrtwo')
const express = require('express')

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const PORT = 5400

const arrPost = [
    {
        "id": 1,
        "name": "lala bebe",
        "username": "labe",
        "email": "lll@april.bb",
    }
]

app.get('/', (req, res) => {
    res.json(arrtwo)
})

app.post('/', (req, res) => {
    const addInfo = req.body
    arrPost.push(addInfo)
    console.log(arrPost)
    res.status(201).json({message: 'add smth'})
})

app.listen(PORT,  () => {
    console.log(PORT)
})