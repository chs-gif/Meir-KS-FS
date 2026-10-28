import { add3 } from "./module.cjs";

export function add4(a, b) {
    console.log('from add4');
    return add3(a, b)
}

export default function add5(a, b) {
    console.log('from add5');
    return add4(a, b)
}

// export default { add4, add5 }