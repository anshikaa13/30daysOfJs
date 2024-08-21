//Add two numbers
// Definition for a singly linked list node.
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
var addTwoNumbers = function(l1, l2) {
    let num1 = '', num2 = ''

    while (l1) {
        num1 = l1.val + num1
        l1 = l1.next
    }

    while (l2) {
        num2 = l2.val + num2
        l2 = l2.next
    }

    const sum = (BigInt(num1) + BigInt(num2)).toString()

    let list = null
    let i = 0
    while (i < sum.length) {
        list = new ListNode(sum[i], list)
        i++
    }

    return list
};

// Helper function to create a linked list from an array
function createLinkedList(arr) {
    let head = null;
    for (let i = arr.length - 1; i >= 0; i--) {
        head = new ListNode(arr[i], head);
    }
    return head;
}

// Helper function to convert linked list to array (for easy output comparison)
function linkedListToArray(list) {
    const arr = [];
    while (list) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

// Test Case 
let l1 = createLinkedList([2, 4, 3]);
let l2 = createLinkedList([5, 6, 4]);
console.log(linkedListToArray(addTwoNumbers(l1, l2))); // Output: [7, 0, 8]

//Longest substring without repeating characters
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = {};

    let max = 0;

    let i = 0;
    let j = 0;

    while (i < s.length) {
        if (!map[s[i]]) {
            map[s[i]] = 1;
            
            max = Math.max(max, i - j + 1);
            i++;
        } else {
            delete map[s[j]];
            j++;
        }
    }

    return max;
};
// Test Case
s = "abcdef";
console.log(lengthOfLongestSubstring(s)); // Output: 6

//Container with most water
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
 let right = height.length - 1;
 let maxArea = 0;

 while (left < right) {
   const area = Math.min(height[left], height[right]) * (right - left);
   maxArea = Math.max(maxArea, area);

   if (height[left] < height[right]) {
     left++;
   } else {
     right--;
   }
 }

 return maxArea;
};

// Test Case
let height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height)); // Output: 49

//3sum
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let sorted = nums.sort((a,b) => a- b);
    let out = [];

    for (let i = 0; i < sorted.length; i++) {
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;
        let left = i + 1;
        let right = sorted.length - 1;
        while (left < right) {
            let res = sorted[i] + sorted[left] + sorted[right];
            if (res === 0) {
                out.push([sorted[i], sorted[left], sorted[right]])
                while (left < right && sorted[left] === sorted[left + 1]) left++
                while (left < right && sorted[right] === sorted[right - 1]) right--
                left++;
                right--;
            }
            else if (res > 0) {
                right--
            } else {
                left++
            }
        }
    }
    return out
};

// Test Case 
let nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums)); 
// Output: [[-1, -1, 2], [-1, 0, 1]]

//Group anagrams
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const tempMap = new Map();
    for(let i=0;i<strs.length;i++){
        let sortedVal = strs[i].split("").sort().join("");
        if(tempMap.has(sortedVal)){
            let tempArr = tempMap.get(sortedVal);
            tempArr.push(strs[i]);
            tempMap.set(sortedVal,tempArr);
            tempArr = [];
        }else{
            tempMap.set(sortedVal,[strs[i]]);
        }
    }
    return [...tempMap.values()];
};
// Test Case 1: Simple Case with Anagrams
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]