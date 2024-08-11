//activity 1

//task1

function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {

        for (let j = 0; j < n - 1 - i; j++) {
            
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Example usage
let array1 = [64, 34, 25, 12, 22, 11, 90];
console.log("Sorted array:", bubbleSort(array1));//output : [11,12,22,25,34,64,90]

//task2

function selectionSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

let array2 = [64, 25, 12, 22, 11];
console.log("Sorted array:", selectionSort(array2));//output : [11,12,22,25,64]

//task3

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
let array3 = [64, 25, 12, 22, 11];
console.log("Sorted array:", quickSort(array3));

//activity 2

//task4

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

let array4 = [64, 25, 12, 22, 11];
let target1 = 22;
let result1 = linearSearch(array4, target1);

if (result1 !== -1) {
    console.log(`Element found at index: ${result1}`);
} else {
    console.log("Element not found in the array.");
}

//task5

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

let array5 = [11, 12, 22, 25, 64];
let target2 = 22;
let result2 = binarySearch(array5, target2);

if (result2 !== -1) {
    console.log(`Element found at index: ${result2}`);
} else {
    console.log("Element not found in the array.");
}

//activity 3

//task6

function countCharacterOccurrences(str) {
    let charCount = {};

    for (let char of str) {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }

    return charCount;
}

let inputString = "hello world";
let characterCounts = countCharacterOccurrences(inputString);
console.log("Character counts:", characterCounts);

//task7

function longestUniqueSubstring(s) {
    let start = 0;
    let maxLength = 0;
    let charIndexMap = new Map();

    for (let end = 0; end < s.length; end++) {
        if (charIndexMap.has(s[end])) {
            start = Math.max(charIndexMap.get(s[end]) + 1, start);
        }

        charIndexMap.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

let inputString2 = "abcabcbb";
let lengthOfLongestSubstring = longestUniqueSubstring(inputString2);
console.log("Length of the longest substring without repeating characters:", lengthOfLongestSubstring);

//activity 4

//task8

function rotateArray(arr, k) {
    let n = arr.length;
    k=k%n;
    for (let i = 0; i < k; i++) {

        let last = arr[n - 1];

        for (let j = n - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }
        arr[0] = last;
    }
    return arr;
}

// Example usage
let array6 = [1, 2, 3, 4, 5, 6, 7];
let k = 3; // Number of rotations
let rotatedArray = rotateArray(array6, k);
console.log("Rotated array:", rotatedArray);

//task9

function merge(arr1, arr2) {
    let n = arr1.length;
    let m = arr2.length;
    let arr3 = [];
    let i = 0, j = 0, k = 0;

    while (i < n && j < m) {
        if (arr1[i] < arr2[j]) {
            arr3[k++] = arr1[i++];
        } else {
            arr3[k++] = arr2[j++];
        }
    }

    while (i < n) {
        arr3[k++] = arr1[i++];
    }

    while (j < m) {
        arr3[k++] = arr2[j++];
    }

    return arr3;
}

// Example usage
let arr1 = [1, 3, 5, 7];
let arr2 = [2, 4, 6, 8];
let mergedArray = merge(arr1, arr2);

console.log("Merged array:", mergedArray);