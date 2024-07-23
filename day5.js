/ Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(number) {
    if (number % 2 === 0) {
      console.log(`${number} is even`);
    } else {
      console.log(`${number} is odd`);
    }
  }
  // Example usage:
  checkEvenOdd(4); // Output: 4 is even
  checkEvenOdd(7); // Output: 7 is odd
  
  // Task 2: Write a function to calculate the square of a number and return the result.
  function squareNumber(number) {
    return number * number;
  }
  // Example usage:
  console.log(squareNumber(5)); // Output: 25
  console.log(squareNumber(9)); // Output: 81
  
  // Activity 2: Function Expression
  
  // Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
  const findMax = function (num1, num2) {
    const max = num1 > num2 ? num1 : num2;
    console.log(`The maximum of ${num1} and ${num2} is ${max}`);
  };
  // Example usage:
  findMax(10, 20); // Output: The maximum of 10 and 20 is 20
  findMax(30, 15); // Output: The maximum of 30 and 15 is 30
  
  // Task 4: Write a function expression to concatenate two strings and return the result.
  const concatenateStrings = function (str1, str2) {
    return str1 + str2;
  };
  // Example usage:
  console.log(concatenateStrings("Hello, ", "World!")); // Output: Hello, World!
  
  // Activity 3: Arrow Functions
  
  // Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
  const sumNumbers = (num1, num2) => num1 + num2;
  // Example usage:
  console.log(sumNumbers(5, 7)); // Output: 12
  console.log(sumNumbers(10, 20)); // Output: 30
  
  // Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
  const containsCharacter = (str, char) => str.includes(char);
  // Example usage:
  console.log(containsCharacter("hello", "e")); // Output: true
  console.log(containsCharacter("world", "a")); // Output: false
  
  // Activity 4: Function Parameters and Default Values
  
  // Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
  function multiplyNumbers(a, b = 1) {
    return a * b;
  }
  // Example usage:
  console.log(multiplyNumbers(5, 3)); // Output: 15
  console.log(multiplyNumbers(7));    // Output: 7
  
  // Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
  function greet(name, age = 25) {
    return `Hello, my name is ${name} and I am ${age} years old.`;
  }
  // Example usage:
  console.log(greet("Alice", 30)); // Output: Hello, my name is Alice and I am 30 years old.
  console.log(greet("Bob"));       // Output: Hello, my name is Bob and I am 25 years old.
  
  // Activity 5: Higher-Order Functions
  
  // Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
  function repeatFunction(fn, times) {
    for (let i = 0; i < times; i++) {
      fn();
    }
  }
  // Example usage:
  repeatFunction(() => console.log("Hello"), 3); 
  // Output:
  // Hello
  // Hello
  // Hello
  
  // Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
  function composeFunctions(fn1, fn2, value) {
    return fn2(fn1(value));
  }
  // Example usage:
  const double = x => x * 2;
  const increment = x => x + 1;
  console.log(composeFunctions(double, increment, 5)); // Output: 11