// activity 1
let name ="anshika";
let age=19;
console.log(`myself ${name} and i am ${age}yrs old`);
// myself anshika and i am 19yrs old

// task-2
console.log(`hello world
i am learning javascript`);
// hello world
// i am learning javascript

// activity2
let arr=[12,23,45,69];
let [num1,num2]=arr;
console.log(`first ${num1} second ${num2}`);

// task2
const book={
    naame:"one indian girl",
    author:"chetan bhagat"
};

let {naame,author}=book;
console.log(`${naame} is written by ${author}`);
// one indian girl is written by chetan bhagat

// activity 3
const existingArray = [1, 2, 3];
const additionalElements = [4, 5, 6];

const combinedArray = [...existingArray, ...additionalElements];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

function summ(...args) {
    let sum=0;
    for (const arg of args) {
        sum+=arg;
    }
    return sum;
}

console.log(summ(1,2,3,4,5,6,7,8,9,10));
// output 55;

// activity 4
function multiply(a,b=1){
    return a*b;
}
console.log(multiply(5));// 5
console.log(multiply(5,4));// 20

// activity 5

let yr=2024;
let sem=2;
let branch="ai";

let detail={yr,sem,branch};
console.log(detail);
// { yr: 2024, sem: 2, branch: 'ai' }


// task 9
const key = 'name';
const value = 'Atta';

const user = { [key]: value };
console.log(user.name); // Output: Atta
