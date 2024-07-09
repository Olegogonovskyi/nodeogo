const path = require('node:path')
const fs = require("node:fs/promises")
const fss = require("node:fs")

const pathFolder = './baseFolder'
const folderArrays = ['oneFolder', 'twoFolder', 'threeFolder', 'fourFolder', 'fiveFolder']
const fileArrays = ['oneFile', 'twoFile', 'threeFile', 'fourFile', 'fiveFile']
const fileType = '.txt'

// const whatIsThat = async (obPath) => {
//     const stats = await fs.stat(obPath)
//     if (stats.isFile()) {
//         console.log(`${path.basename(obPath)} ---- є файлом шлях до нього -------- ${obPath}`)
//     } else if (stats.isDirectory()) {
//         console.log(`${path.basename(obPath)} ---- є папкою шлях до неї -------- ${obPath}`)
//     } else {
//         console.log(`${path.basename(obPath)} ---- є фіг зна чим шлях до цього -------- ${obPath}`)
//     }
// }

const domashka = async () => {

await fs.mkdir(path.join(__dirname, ...folderArrays), {recursive: true})
    // await fs.mkdir(pathFolder, {recursive: true})
    // const absolutePath = path.resolve(pathFolder);
    // await whatIsThat(absolutePath)
    // for (let i = 0; i < folderArrays.length; i++) {
    //     const pathToFolder = `${absolutePath}/${folderArrays[i]}`
    //     await fs.mkdir(pathToFolder, {recursive: true})
    //     await whatIsThat(pathToFolder)
    //     for (let j = 0; j < fileArrays.length; j++) {
    //         const filePath = path.join(pathToFolder, '/', `${fileArrays[j]}${folderArrays[i]}` + fileType)
    //         await fs.writeFile(filePath, `Hello from ${folderArrays[i]} file that is in ${path.resolve(filePath)}`)
    //         await whatIsThat(filePath)
    //         await fss.readFile(filePath, "utf-8", (err, data) => {
    //             console.log(`${path.basename(filePath)} ----read----`, data)
    //         })
    //     }
    // }
    // await fs.rm(path.join(__dirname, 'sssss'), {recursive: true})
    await fs.unlink(path.join(__dirname, 'all.ged'))

}
void domashka()