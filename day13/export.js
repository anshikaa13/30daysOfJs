//task1
export function add(a,b){
    return a+b;
}

//task2 
let Person="anshika";

export {Person}

//task3
function mul(a,b){
    return a*b
}

function newfn(a) {
    return 2*a
}

export{
    mul as multy,newfn as newfn1,lodash1
}

//task4

export default function add2(a){
    return 2+a;
}