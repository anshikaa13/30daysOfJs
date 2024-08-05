// Activity1

//Task1 

function hello()
{
    throw new Error("This is error");
};

try {
    hello();
} catch (error) {
    console.log('The error is:',error.message);
}
//The error is: This is  error

//Task2 

function divide()
{
    let a=7;
    let b=0;
    if (b==0)
    {
        throw new Error('ZERO DIVISION ERROR');
    }
    else
    {
        return (a/b);
    }
}

try {
    divide();
    
} catch (error) {
    console.log(error.message);
}
//ZERO DIVISION ERROR

// Activity 2 

//Task3 

try {
    console.log('I am in try');
    hello();
} catch (error) {
    console.log('I am in catch block');
    console.log(error.message);
}
finally{
    console.log('I am in finally block');
}

// I am in try
// I am in catch block
// I am in finally block

// Activity 3 Custom Error Objects

//Task4 
class ZeroDivisionError extends Error {
    constructor(message) {
        super(message); 
        this.name = "ZeroDivisionError"; 
    }
}
function divide2() {
    let a = 7;
    let b = 0;

    if (b === 0) {
        throw new ZeroDivisionError('ZERO DIVISION ERROR');
    } else {
        return a / b;
    }
}
try {
    let result = divide2();
    console.log("Result:", result);
} catch (error) {
    if (error instanceof ZeroDivisionError) {
        console.error(`Caught a custom error: ${error.name} - ${error.message}`);
    } else {
        console.error(`Caught an unexpected error: ${error.message}`);
    }
}
//Caught a custom error: ZeroDivisionError - ZERO DIVISION ERROR

//Task 
class ValidationError extends Error {
    constructor(message) {
        super(message); 
        this.name = "ValidationErrorOccured"; 
    }
}
function validateInput(input) {
    if (typeof input !== 'string' || input.trim() === '') {
        throw new ValidationError('Input cannot be an empty string or non-string value');
    }
    return "Input is valid!";
}
try {
    const userInput = '';
    const result = validateInput(userInput);
    console.log(result);
} catch (error) {
    if (error instanceof ValidationError) {
        console.error(`Caught a validation error: ${error.name} - ${error.message}`);
    } else {
        console.error(`Caught an unexpected error: ${error.message}`);
    }
}
//Caught a validation error: ValidationErrorOccured - Input cannot be an empty string or non-string value

// Activity 4 

//Task6 
function randomPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = Math.random();
            if (random < 0.5) {
                resolve("success");
            } else {
                reject(new Error("Random failure"));
            }
        }, 2000);
    });
}

randomPromise()
    .then(result => {
        console.log("Promise resolved with:", result);
    })
    .catch(error => {
        console.log("Promise rejected with:", error.message);
    });
//Promise rejected with: Random failure
//Promise resolved with: success

//Task7 

async function handlePromise() {
    try {
        const result = await randomPromise();
        console.log("Promise resolved with:", result);
    } catch (error) {
        console.log("Promise rejected with:", error.message);
    }
}

handlePromise();
//Promise rejected with: Random failure
// Promise resolved with: success

// Activity 5 

//Task8 
const URL='https://cat-fact.herokuapp.com/factsss//';

const fetchData = () => {
    return new Promise((resolve, reject) => {
        fetch(URL)
            .then(response => {
                if (!response.ok) {
                    reject(new Error(`HTTP error! status: ${response.status}`));
                } else {
                    response.json().then(data => resolve(data));
                }
            })
            .catch(error => {
                reject(error);
            });
    });
};

fetchData()
    .then(data => console.log(data))
    .catch(error => console.log(error));
//Error: HTTP error! status: 404

//Task9

const getFacts=async()=>
    {
        try
        {
            console.log('getting data...');
            let response=await fetch(URL);
            if (!response.ok) {
                throw new Error('HTTP error! status: ${response.status}');
            }
            let data = await response.json();
            console.log(data);
        }
        catch(error)
        {
            console.log(error);
        }
        
    };
    getFacts();
    // output getting data...
    // Error: HTTP error! status: 503