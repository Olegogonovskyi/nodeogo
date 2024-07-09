const path = require('node:path')
const fs = require("node:fs/promises")
// const fss = require("node:fs")

const pathFolder = './baseFolder'
const folderArrays = ['oneFolder', 'twoFolder', 'threeFolder', 'fourFolder', 'fiveFolder']
const fileArrays = ['oneFile', 'twoFile', 'threeFile', 'fourFile', 'fiveFile']
const fileType = '.txt'

const whatIsThat = async (obPath) => {
    const stats = await fs.stat(obPath)
    if (stats.isFile()) {
        console.log(`${obPath} є файлом.`)
    } else if (stats.isDirectory()) {
        console.log(`${obPath} є папкою.`)
    } else {
        console.log(`${obPath} є фіг зна чим.`)
    }
}

const domashka = async () => {
    await fs.mkdir(pathFolder, {recursive: true})
    const absolutePath = path.resolve(pathFolder);
    for (let i = 0; i < folderArrays.length; i++) {
        const pathToFolder = absolutePath + '/' + `${folderArrays[i]}`
        await fs.mkdir(pathToFolder, {recursive: true})
        await whatIsThat(pathToFolder)
        // console.log(`Path to ${folderArrays[i]} is ---------`, filePath)
        for (let j = 0; j < fileArrays.length; j++) {
            const filePath = path.join(pathToFolder, '/', `${fileArrays[j]}` + fileType)
            await fs.writeFile(filePath, `Hello from ${folderArrays[i]} file that is in ${path.resolve(filePath)}`)
            await whatIsThat(filePath)
        }
        // await fss.readFile(filePath, "utf-8", (err, data) => {
        //     console.log('read -------', data)
        // })
    }
}
void domashka()