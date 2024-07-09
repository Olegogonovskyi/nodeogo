const path = require('node:path')
const fs = require("node:fs/promises")

const pathFolder = './baseFolder'
const folderArrays = ['one', 'two', 'three', 'four', 'five']
const fileType = '.txt'

const domashka = async () => {
    await fs.mkdir(pathFolder, {recursive: true})
    const absolutePath = path.resolve(pathFolder);
    for (let i = 0; i < folderArrays.length; i++) {
        const pathToFolder = absolutePath + '/' + `${folderArrays[i]}`
        await fs.mkdir(pathToFolder, {recursive: true})

        const filePath = path.join(pathToFolder, '/', `${folderArrays[i]}` + fileType)
        await fs.writeFile(filePath, `Hello from ${folderArrays[i]} file`)
        console.log(`Path to ${folderArrays[i]} file is ---------`, filePath)
        const stats = await fs.stat(filePath)
        if (stats.isFile()) {
            console.log(`${filePath} є файлом.`)
        } else if (stats.isDirectory()) {
            console.log(`${filePath} є папкою.`)
        } else {
            console.log(`${filePath} є фіг зна чим.`)
        }

    }
}
domashka()