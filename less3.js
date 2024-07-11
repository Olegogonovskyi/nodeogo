const express = require('express')
const path = require('node:path')
const fs = require('node:fs/promises');

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
    try {
        const data = await superHeroGetter()
        await res.json(data);
    } catch (e) {
        res.status(500).json({message: 'Друже, сервер на відпочинку'})
    }

})
app.post(superheroesPath, async (req, res) => {
    try {
        const data = await superHeroGetter()
        const addData = req.body
        const duplicate = data.find(
            (item) => item.id === addData.id || item.name === addData.name || item.image.url === addData.image.url
        );
        if (duplicate) {
            res.status(409).json({message: 'Такі дані вже exsists'});
        } else {
            data.push(addData);
            await fs.writeFile(pathToArray, JSON.stringify(data));
            res.status(201).json({message: 'Bimba'});
        }
    } catch (e) {
        res.status(400).json({message: 'Bad Request'})
    }
})
app.delete('/superheroes/:id',  async (req, res) => {
    try {
        const superID = +req.params.id
        const data =  await superHeroGetter()
        const index = data.findIndex(superhero => superhero.id === superID)

        index === -1 ? res.status(404).json({message: 'this superhero тут не проживає'}) : data.splice(index, 1)
        await fs.writeFile(pathToArray, JSON.stringify(data))
        res.status(204).json({message: 'this superhero deleted'})
    } catch (e) {
        res.status(400).json(e.message)
    }

})

app.listen(PORT, () => {
    console.log(PORT)
})
