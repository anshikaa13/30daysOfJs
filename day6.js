// Actiivity 1
// Task 1
let numbers = [1, 2, 3, 4, 5];

console.log(numbers);

// Task 2
let lastElement = numbers[numbers.length - 1];
let firstElement = numbers[0];
console.log('First element:', firstElement);
console.log('Last element:', lastElement);

// Activity 2
// Task 3
numbers.push[6];
console.log(numbers);
// Task 4
numbers.pop();
console.log(numbers);
// Task 5
numbers.shift();
console.log(numbers);
// Task 6
numbers.unshift[0];
console.log(numbers);

// Activity3
// Task 7
let doubledNumbers = numbers.map(function(number) {
  return number * 2;
});

console.log(doubledNumbers);

// Task 8
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

// Task 9
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);


// Activity 4
// Task 10
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

// Task 11
numbers.forEach(number => {
    console.log(number);
});

// Task 12
const twoDArray = [
    [1, 2, 3],[4, 5, 6],[7, 8, 9]
];

console.log(twoDArray);

// Task 13
const specificElement = twoDArray[1][2];
console.log(specificElement);