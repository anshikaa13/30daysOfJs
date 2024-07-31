//question 1
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    }
};

// ouestion 2
var createCounter = function(n) {
    let count = n; 

    return function() {
        const currentValue = count; // 
        count += 1; 
        return currentValue; 
    };
};