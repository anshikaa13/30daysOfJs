var map = function(arr, fn) {
    const result = [];
      for (let i = 0; i < arr.length; i++) {
          result.push(fn(arr[i], i));
      }
      return result;
  }

//   2nd
var createCounter = function(init) {
    let currentValue = init;

    return {
        increment: function() {
            currentValue++;
            return currentValue;
        },
        decrement: function() {
            currentValue--;
            return currentValue;
        },
        reset: function() {
            currentValue = init;
            return currentValue;
        }
    };
};
