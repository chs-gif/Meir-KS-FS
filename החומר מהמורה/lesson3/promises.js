import { writeFileSync } from 'fs'


function logg(text) {
    console.log('from logg');   
    console.log(text);   
}

const promiseFunc = new Promise((resolve, reject) => {
    console.log('from promiseFunc');  
    setTimeout(() => {
        resolve('Hello from a')
    }, 1000)
})

promiseFunc
.then(logg)
.catch(err => console.log(err))

promiseFunc.then(text => writeFileSync('file1.txt', text))

// sort
// .then(wash)
// .then(dry)
// .then(fold)
// .then(put)
// .catch(err => console.log(err))

console.log();

try {
    const text = await promiseFunc
    console.log('text: ', text);
} catch (err) {
    console.log(err)
}

async function robot() {
    try {
        await sort
        await wash
        await dry
        await fold
        await put
    } catch(err){
        console.log(err)
    }
}