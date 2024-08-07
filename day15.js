// Activity 1 Understanding Closures

//Task1 

function hello()
{
    let name='anshika';
    function hello2()
    {
        console.log(name);
    }
    return hello2;
}

const f=hello();
f();
//anshika

//Task2 
function createCounter() {
    let counter=0;
    function increment()
    {
        counter++;
    }
    function get()
    {
        console.log(counter);
    }
    return {
        increment:increment,
        get:get
    };
}

const f2=createCounter();
f2.increment();
f2.increment();
f2.get();
//2

// Activity 2 Practical Closures

//Task3 

function createid()
{
    let id=120;
    function inc()
    {
        id++;
    }
    function get()
    {
        console.log(id);
    }
    return{
        inc:inc,
        get:get
    }
}

const f3=createid();
f3.inc();
f3.inc();
f3.inc();
f3.get();
//123

//Task4 

function username(a)
{
    let name=a;
    function greet()
    {
        console.log(`Hello ${name}`);
    }
    return greet;
}

const f4=username('Esha');
f4();
//Hello Esha

// Activity 3 Closures in Loops

//Task5 
const functions = [];

for (let i=0;i<5;i++) 
{
    functions[i]=(function(index) 
    {
        function k() {
            console.log(index);
        };
        return k;
    })(i);
}

functions[3]();
//3

// Activity 4 Module Pattern

//Task6

function manage()
{
    let items=[];
    function add(item)
    {
        items.push(item);
    }
    function remove(item)
    {
        items=items.filter(i =>i!==item);
    }
    function list() 
    {
        console.log(items);
    }
    return {
        add: add,
        remove: remove,
        list: list
    };
}

const f5=manage();
f5.add(2);
f5.add(3);
f5.add(1);
f5.add(5);
f5.list();
f5.remove(1);
f5.list();
// [ 2, 3, 1, 5 ]
// [ 2, 3, 5 ]

// Activity 5 Memoization

function memoize(fn) {
    const cache=new Map(); // Stores the results of previous computations

    function k(...args) 
    {
        const key = JSON.stringify(args); // Create a key based on the function arguments
        if (cache.has(key)) {
            return cache.get(key);
        }

        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
    return k;
}

function Function(x) {
    return x;
    
}

const memoizedFunction = memoize(Function);

console.log(memoizedFunction(5)); // Computation happens and result is cached
console.log(memoizedFunction(5)); // Result is retrieved from the cache
console.log(memoizedFunction(6)); // Computation happens and result is cached

//Task8 C

function factorial(n) {
    if (n < 0) 
        {throw new Error("Factorial is not defined for negative numbers")};
    if (n === 0 || n === 1) 
        {return 1};
    return n*factorial(n-1);
}


const memoizedFactorial=memoize(factorial);
console.log(memoizedFactorial(5)); // Output: 120
console.log(memoizedFactorial(5)); // Output: 120 (cached result)
console.log(memoizedFactorial(6)); // Output: 720
console.log(memoizedFactorial(0)); // Output: 1