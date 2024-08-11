//activity 1

//task1

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

// Creating nodes
let node1 = new Node(10);
let node2 = new Node(20);

// Linking nodes
node1.next = node2;

console.log(node1.value); // 10
console.log(node1.next.value); // 20

//task2

class LinkedList {
    constructor() {
      this.head = null;
    }
  
    add(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    remove() {
      if (!this.head) {
        console.log("The list is empty.");
        return;
      }
  
      if (!this.head.next) {
        this.head = null;
        return;
      }
  
      let current = this.head;
      let previous = null;
      while (current.next) {
        previous = current;
        current = current.next;
      }
      previous.next = null;
    }
  
    display() {
      if (!this.head) {
        console.log("The list is empty.");
        return;
      }
  
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  

const list = new LinkedList();

list.add(10);
list.add(20);
list.display();
// Output:
// 10
// 20

list.remove();
list.display();
// Output:
// 10

list.remove();
list.display();
// Output:
// The list is empty.

//activity 2

//task3

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) {
        console.log("The stack is empty.");
        return null;
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.items.length === 0) {
        console.log("The stack is empty.");
        return null;
      }
      return this.items[this.items.length - 1];
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
console.log(stack.peek()); // Output: 20
console.log(stack.pop());  // Output: 20
console.log(stack.peek()); // Output: 10
stack.pop();               // Removes the last element
console.log(stack.peek()); // Output: The stack is empty

//task4

function reverseString(str) {
    const stack = new Stack();
    let reversedStr = '';
  
    for (let char of str) {
      stack.push(char);
    }
  
    while (stack.items.length > 0) {
      reversedStr += stack.pop();
    }
  
    return reversedStr;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);

console.log("Original String:", originalString); // Output: "Hello, World!"
console.log("Reversed String:", reversedString); // Output: "!dlroW ,olleH"

//activity 3

//task5

class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.items.length === 0) {
        console.log("The queue is empty.");
        return null;
      }
      return this.items.shift();
    }
  
    front() {
      if (this.items.length === 0) {
        console.log("The queue is empty.");
        return null;
      }
      return this.items[0];
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
console.log(queue.front()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.front()); // Output: 20
queue.dequeue();             // Removes the last element
console.log(queue.front());  // Output: The queue is empty.

//task6

class PrinterQueue {
    constructor() {
      this.queue = new Queue();
    }
  
    addJob(job) {
      this.queue.enqueue(job);
      console.log(`Added job: ${job}`);
    }
  
    processNextJob() {
      const job = this.queue.dequeue();
      if (job) {
        console.log(`Processing job: ${job}`);
      }
    }
  
    printQueue() {
      const currentJob = this.queue.front();
      if (currentJob) {
        console.log(`Current job in queue: ${currentJob}`);
      } else {
        console.log("No jobs in queue.");
      }
    }
}
  
  // Example Usage:
  
const printer = new PrinterQueue();
  
printer.addJob("Print Document 1");
printer.addJob("Print Document 2");
printer.printQueue(); // Output: Current job in queue: Print Document 1
printer.processNextJob(); // Output: Processing job: Print Document 1
printer.printQueue(); // Output: Current job in queue: Print Document 2
printer.processNextJob(); // Output: Processing job: Print Document 2
printer.processNextJob(); // Output: The queue is empty.

//activity 4

//task7

class TreeNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

const root = new TreeNode(1);
const leftChild = new TreeNode(2);
const rightChild = new TreeNode(3);

root.left = leftChild;
root.right = rightChild;

console.log(root.value);      // Output: 1
console.log(root.left.value); // Output: 2
console.log(root.right.value); // Output: 3

//task8

class BinaryTree {
    constructor() {
      this.root = null;
    }
  
    insert(value) {
      const newNode = new TreeNode(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        this._insertNode(this.root, newNode);
      }
    }
  
    _insertNode(node, newNode) {
      if (newNode.value < node.value) {
        if (node.left === null) {
          node.left = newNode;
        } else {
          this._insertNode(node.left, newNode);
        }
      } else {
        if (node.right === null) {
          node.right = newNode;
        } else {
          this._insertNode(node.right, newNode);
        }
      }
    }
  
    inOrderTraversal(node = this.root) {
      if (node !== null) {
        this.inOrderTraversal(node.left);
        console.log(node.value);
        this.inOrderTraversal(node.right);
      }
    }
}

const tree = new BinaryTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(3);
tree.insert(7);
tree.insert(12);
tree.insert(18);

console.log("In-order Traversal:");
tree.inOrderTraversal();
// Output:
// 3
// 5
// 7
// 10
// 12
// 15
// 18