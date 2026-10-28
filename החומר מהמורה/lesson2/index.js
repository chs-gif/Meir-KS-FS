// const m = require('./module.cjs'); // { add1, add3 }
// const nm = require('./newModule.mjs')

import { add4 } from './newModule.mjs'
import add from './newModule.mjs'
import * as m from './module.cjs'
// const fs = require('fs')

console.log(m.add3(1, 2))
console.log(add4(3, 4));
console.log(add(2, 5));
