const express = require('express')
const path = require('node:path')
const fs = require('node:fs/promises');
const fssyn = require('node:fs');


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT = 5200
const pathToArray = path.join(__dirname, 'superheroes.txt')
const superheroesPath = '/superheroes'

const superHeroGetter = async () => {
    const data = await fs.readFile(pathToArray, "utf-8");
    return JSON.parse(data);
}

app.get(superheroesPath, async (req, res) => {
    const data = await superHeroGetter()
    await res.json(data);
})
app.post(superheroesPath, async (req, res) => {
    const data = await superHeroGetter()
    const addData = req.body
    data.push(addData)
    console.log(data)
    await fs.writeFile(pathToArray, JSON.stringify(data))
    res.status(201).json({message: 'Bimba'})
})
app.listen(PORT, () => {
    console.log(PORT)
})
