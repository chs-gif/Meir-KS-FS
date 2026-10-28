function add1(a, b) {
    console.log('from add1');
    return a + b
}

function add2(a, b) {
    console.log('from add2');
    return a + b
}

function add3(a, b) {
    console.log('from add3');
    return add2(a, b)
}

module.exports = { add1, add3 }