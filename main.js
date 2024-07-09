const path = require('node:path')
const fs = require("node:fs/promises")

const pathFolder = './baseFolder'
const folderArrays = ['oneFolder', 'twoFolder', 'threeFolder', 'fourFolder', 'fiveFolder']
const fileArrays = ['oneFile', 'twoFile', 'threeFile', 'fourFile', 'fiveFile']
const fileType = '.txt'

const whatIsThat = async (obPath) => {
    const stats = await fs.stat(obPath)
    if (stats.isFile()) {
        console.log(`${__filename} є файлом шлях до нього -------- ${obPath}`)
    } else if (stats.isDirectory()) {
        console.log(`${path.dirname(obPath)} ---- є папкою шлях до неї -------- ${obPath}`)
    } else {
        console.log(`${__filename} ---- є фіг зна чим шлях до цього -------- ${obPath}`)
    }
}

const domashka = async () => {
    await fs.mkdir(pathFolder, {recursive: true})
    const absolutePath = await path.resolve(pathFolder);

    for (let i = 0; i < folderArrays.length; i++) {
        const pathToFolder = await `${absolutePath}\${folderArrays[i]}`
        await fs.mkdir(pathToFolder, {recursive: true})
        await whatIsThat(pathToFolder)
        for (let j = 0; j < fileArrays.length; j++) {
            const filePath = await path.join(pathToFolder, '/', `${fileArrays[j]}` + fileType)
            await fs.writeFile(filePath, `Hello from ${folderArrays[i]} file that is in ${path.resolve(filePath)}`)
            await whatIsThat(filePath)
        }
        // await fss.readFile(filePath, "utf-8", (err, data) => {
        //     console.log('read -------', data)
        // })
    }
}
void domashka()