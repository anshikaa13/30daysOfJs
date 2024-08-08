// activity 1
function factorial(n){
    if(n==1 ||n==0)
        return 1;
    else
   return  n*factorial(n-1);
    
}

function fibonacii(n){
    if(n==1||n==2)
        return 1;
    else 
    return fibonacii(n-1)+fibonacii(n-2);
}


//activity 2 : recursion with arrays 

//task3

function sumArray(arr) {
    if (arr.length === 0) {
        return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
}

// Example usage:
const array = [1, 2, 3, 4, 5];
console.log(sumArray(array)); // Output: 15

//task4

function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    const maxOfRest = findMax(arr.slice(1));
    return arr[0] > maxOfRest ? arr[0] : maxOfRest;
}

const array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const maxElement = findMax(array1);
console.log("Maximum element:", maxElement); // Output: Maximum element: 9

//activity 3 : string manipulation

//task5

function reverseString(str) {
    if (str.length <= 1) {
        return str;
    }

    return reverseString(str.slice(1)) + str[0];
}

const originalString = "hello";
const reversedString = reverseString(originalString);
console.log("Reversed string:", reversedString); // Output: Reversed string: olleh

//task6

function isPalindrome(str) {
    if (str.length <= 1) {
        return true;
    }

    if (str[0] === str[str.length - 1]) {
        return isPalindrome(str.slice(1, -1));
    }

    return false;
}

const example = "adda";
console.log(`Is "${example}" a palindrome?`, isPalindrome(example)); // output: Is "adda" a palindrome? true

//activity 4 : recursive search

//task7

function binarySearch(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) {
        return -1; 
    }
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
        return mid; 
    }
    if (target < arr[mid]) {
        return binarySearch(arr, target, left, mid - 1);
    }
    return binarySearch(arr, target, mid + 1, right);
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;
const index = binarySearch(sortedArray, target);
console.log(`Index of target ${target}:`, index);

// Expected output:
// Index of target 7: 6

//task8

function countOccurrences(arr, target, index = 0) {
    if (index >= arr.length) {
        return 0;
    }
    const count = arr[index] === target ? 1 : 0;
    return count + countOccurrences(arr, target, index + 1);
}

// Example usage:
const array3 = [1, 2, 3, 2, 4, 2, 5];
const target1 = 2;
const occurrences = countOccurrences(array3, target1);
console.log(`Occurrences of target ${target}:`, occurrences);

// Expected output:
// Occurrences of target 2: 3
