// Day 11

// Activity 1: Understanding Promises
// Task 1
function promise(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("success 1");
    },2000);
});
}

promise().then((res)=>{
    console.log("promise resolved with message",res);
});

// output: promise resolved with message success 1


// Task 2
function promise2(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("promise failed");
    },2000);
});
} 

promise2().then((message) => {
    console.log("Promise resolved with message:", message);
}).catch((error) => {
    console.log("Promise rejected with error:", error);
});
// output: Promise rejected with error: promise failed


// Activity 2: Chaining promises
// Task 3
console.log("fetching from promise 1");
promise().then((message)=>{
    console.log(message);
    console.log("fetching promise 2");
    return promise2().catch((message)=>{
        console.log(message);
    });
});
// output:
// fetching from promise 1
// success 1
// fetching from promise 2
// promise failed


// Activity 3: Using Asynch/Await
// Task 4
function api(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{console.log("promise from api with weather data");
        reslove("promise resolve");
    } , 2000);
    });
}

async function getWeatherData(){
    const output = await api();  
    console.log(output);
}
getWeatherData();
// output:
// promise from api with weather data
// promise resolve

// Task 5
async function executePromise2(){
    try{
        await promise2();
    }
    catch(error){
        console.log(error);
    }
}
executePromise2();
// output: promise failed


// Activity 4: Fetchinf data from API
// Task 6

let src = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/2024-02-26/currencies/eur.json";
const currency = ()=>{
    return new Promise((resolve,reject)=>{
        fetch(src)
        .then(response =>{
            if(!response.ok){
                reject(new Error(`Error: ${response.status} - Resource not found`));
            }else{
                response.json().then(data => resolve(data));
            }
        })
        .catch(error => reject(error));
    });
};
currency().then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});


// Task 7
let src1 = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json";
const getCurrency = async()=>{
    try{
        let response = await fetch(src1);
        if(!response.ok){
            throw new Error(`Error: ${response.status} - Resource not found`);
        }
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error);
    }
};
getCurrency();


// Activity 5: Concurrent Promises
// Task 8
function promise3(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("success promise 3");
        },5000)
    });
}
const p1 = promise();
const p2 = promise3();
Promise.all([p1,p2]).then((messages)=>{
    console.log(messages);
});
// output: [ 'success 1', 'success promise 3' ]

// Task 9
Promise.race([p1,p2]).then((messages)=>{
    console.log(messages);
});
// output: success 1