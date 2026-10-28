console.log('1')

setTimeout(() => {
    console.log('6');  
}, 2000)

setTimeout(() => {
    console.log('5');   
}, 1000)

console.log('2');

const time = new Date()
// const f = { a: '', b: '' }
// f.a = 'd'
let now = new Date()

time.setSeconds(time.getSeconds() + 3)

while(time.getSeconds() !== now.getSeconds()){
    now = new Date()
    // console.count('in while');
}

console.log('3');

setTimeout(() => {
    console.log('7');   
}, 1000)

console.log('4');

// setTimeout היא פונקציה של JS שמקבלת פונקציה ומס' MS ומפעילה את הפונקציה פעם אחת אחרי שעובר מס' הMS שקיבלה
// setTimeout(() => {}, 1000)

// setInterval היא פונקציה של JS שמקבלת פונקציה ומס' MS ומפעילה את הפונקציה כל מס' הMS שקיבלה
// כל עוד לא מחקנו את האינטרוול הוא ימשיך לעבוד ולתפוס מקום בזיכרון
// ולכן חשוב מאד בהגדרת האינטרוול לשמור את המזהה שלו
// כדי שכשהוא הופך ללא רלוונטי נוכל להפעיל עליו את הפונקציה clearInterval ולמחוק אותו
// setInterval(() => {}, 1000)


const id = setInterval(() => {
    console.count('interval')
}, 1000)

setTimeout(() => {
    clearInterval(id)
}, 10000)