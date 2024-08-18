// Activity 1: Two sum
// 1

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let arr = [];
    for(let i=0; i<nums.length; i++){
        let sum = target-nums[i];
        arr[0] = i;
        for(let j=i+1; j<nums.length; j++){
            if(nums[j] == sum){
                arr[1] = j;
                return arr;
            }
        }
    }
};

let ans1 = twoSum([1,2,3,4,5],6);
console.log(ans1);
// output: [0,4]

// Activity 2: Reverse Integer

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = 0;
    let temp = Math.abs(x);
    let sign = x>0?1:-1;
    while(temp!=0){
        let rem = temp%10;
        num = num*10 + rem;
        if (num > 2147483647) {
            return 0;
        }
        temp = Math.floor(temp/10);
    }
    return num*sign;
};

let ans2 = reverse(123);
console.log(ans2);
// output: 321


// Activity 3: Palindrome number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = 0;
    let temp = Math.abs(x);
    
    while(temp!=0){
        let rem = temp%10;
        num = num*10 + rem;
        temp = Math.floor(temp/10);
    }
    if(num == x){
        return true;
    }else{
        return false;
    }
};

let ans3 = isPalindrome(12321);
console.log(ans3);
// output: true

// Activity 4: Merge two sorted lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let newnode = new ListNode(0);
    let temp = newnode;
    if(list1 == null){
        return list2;
    }else if(list2 == null){
        return list1;
    }
    while(list1!=null && list2!=null){
        if(list1.val <= list2.val){
            temp.next = list1;
            list1 = list1.next;
        }else{
            temp.next = list2;
            list2 = list2.next;
        }
        temp = temp.next;
    }
    if(list1 == null){
        while(list2!=null){
            temp.next = list2;
            list2 = list2.next;
            temp = temp.next;
        }
    }
    if(list2 == null){
        while(list1!=null){
            temp.next = list1;
            list1 = list1.next;
            temp = temp.next;
        }
    }
    return newnode.next;  
};


// Activity 5: Valid Parinthesis

/**
 * @param {string} s
 * @return {boolean}
 */
class Stack {
    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.items.pop();
    }

    peek() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items.length = 0;
    }
}

var isValid = function(s) {
    const stack = new Stack();
    for(let i=0; i<s.length; i++){
        let ch = s[i];
        
        if(stack.isEmpty()){
            stack.push(ch);
        }else{
            if((stack.peek() == '(' && ch==')') || (stack.peek() == '[' && ch==']') || (stack.peek() == '{' && ch=='}')){
            stack.pop();
            }else{
            stack.push(ch);
            }
        }
    }
    return stack.isEmpty();      
};

let ans5 = isValid("(){}[]");
console.log(ans5);
// output: true