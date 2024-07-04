const fs = require('fs');
const Gedcom = require('gedcom');
const path = require('path')

const gedcomData = fs.readFileSync('C:\Users\User\IdeaProjects\nodeogo\c6bx45_827806zawcdr54144eaep6_A.ged', 'utf8');

const parser = new Gedcom();
parser.parse(gedcomData, (err, result) => {
    if (err) {
        console.error('Помилка при парсингу GEDCOM:', err);
        return;
    }
    console.log(result); // Об'єкт з розпарсеними даними
});