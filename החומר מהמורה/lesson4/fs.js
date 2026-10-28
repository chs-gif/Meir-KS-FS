import * as fs from 'fs'

// רושם את הטקסט לקובץ, אם הקובץ לא קיים - גם יוצר אותו
fs.writeFileSync('data.txt', 'Hello')
const data = fs.readFileSync('data.txt', 'utf8')

console.log('data: ', data);

// מוסיף את הטקסט לסוף הקובץ, אם הקובץ לא קיים - גם יוצר אותו
fs.appendFileSync('data.txt', ' from sync')

fs.renameSync('data.txt', 'data.pdf')

fs.writeFile('data1.txt', 'Hello from async', () => {
    fs.readFile('data1.txt', 'utf8', (err, data) => console.log('data: ', data))
})

fs.promises.writeFile('data2.txt', 'Hello from promise')
.then(() => fs.promises.readFile('data2.txt', 'utf8'))
.then(data => console.log('data: ', data))


