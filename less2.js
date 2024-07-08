const path = require('node:path')
const fs = require("node:fs/promises")

console.log('dirname--------------', __dirname)
console.log('dir + file------------', path.join(__dirname, __filename))

const pathFolder = './baseFolder'
const folderArrays = ['one', 'two', 'three', 'four', 'five']

const domashka = async () => {
    await fs.mkdir(pathFolder, {recursive: true})
    const absolutePath = path.resolve(pathFolder);
    for (let i = 0; i < folderArrays.length; i++) {
        const pathToFolder = absolutePath + '/' + `${folderArrays[i]}`
        await fs.mkdir(pathToFolder, {recursive: true})
    }
}
domashka()