import { writeFileSync } from 'fs'


function logg(text) {
    console.log('from logg');   
    console.log(text);   
}

text => console.log(text);   


function callbackFunc(callback){
    console.log('from callbackFunc');   
    // קריאת נתונים מהDB
    // כתיבת נתונים לקובץ
    setTimeout(() => {
        callback('Hello from a')
    }, 1000)
}

callbackFunc(logg)

callbackFunc(text => writeFileSync('file1.txt', text))

// callback hell
sort(() => {
    try {
        wash(() => {
            try {
                dry(() => {
                    try {
                        fold(() => {
                            try {
                                put()
                            } catch(err) {
                                console.log(err);                     
                            }
                        })
                    } catch(err) {
                        console.log(err);                     
                    }
                })
            } catch(err) {
                console.log(err);                     
            }
        })
    } catch(err) {
        console.log(err);                      
    }
})