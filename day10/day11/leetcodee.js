// 2634. Filter Elements from Array
// problem 1
var filter = function(arr, fn) {
    const newArray = [];
    for(let i=0; i<arr.length; i++){
        if(fn(arr[i],i)){
            newArray.push(arr[i]);
        }
    }
    return newArray;
};

// 2626. Array Reduce Transformation
// problem 2
var reduce = function(nums, fn, init) {
    for(let i=0; i<nums.length; i++){
        let temp = fn(init,nums[i]);
        init = temp;
    }
    return init;
};