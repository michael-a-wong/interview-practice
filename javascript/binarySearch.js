
// input must be sorted
var binarySearch = function( array, target) {
    var start = array.length / 2;
    var currentValue = array[start]; 
    var increase = start

    while (currentValue !== target && start < array.length && start >= 0) {
        increase = Math.floor(increase / 2) ? Math.floor(increase / 2) : 1; 

        if (target < currentValue) {
            start -= increase;  
        }
        else {
            start += increase; 
        }
        currentValue = array[start]; 
    }

    return currentValue;
}

var bsRecur = function( array, left, right, target) {

    if (left <= right) { 
        var middle = left + Math.floor((right - left + 1) / 2); 


        if (array[middle] == target) {
            return array[middle]; 
        }
        else if (target < array[middle]) {
            return bsRecur(array, left, middle - 1, target);
        }
        else return bsRecur(array, middle + 1, right, target); 
    }
    else 
        return -1; 
}

var bsIterative = function (array, left, right, target) {
    
    while (left <= right) {
        var middle = left + Math.floor((right - left + 1) / 2); 

        if (array[middle] == target) {
            return array[middle]; 
        }
        else if (target < array[middle]) {
            right = middle - 1; 
        }
        else left = middle + 1; 
    }
    return -1; 
}

var inputs = [1, 4, 7, 9, 11, 18, 23, 50, 55, 80]; 
var target = 9; 


inputs.forEach(function(element) {
    var result = binarySearch(inputs, element);
    var testBSRecurs = bsRecur(inputs, 0, inputs.length - 1, element); 
    var testBSIterative = bsIterative(inputs, 0, inputs.length - 1, element); 
    if (result == element) {
        console.log(`Found ${element}`); 
    }
    else {
        console.log(`Did not find ${element}`); 
    }
    if (testBSRecurs == element) {
        console.log(`Recurs Found ${element}`); 
    }
    else {
        console.log(`Recurs did not find ${element}. Value is ${testBSRecurs}`); 
    }
    if (testBSIterative == element) {
        console.log(`It recurs Found ${element}`); 
    }
    else {
        console.log(`It recurs did not find ${element}. Value is ${testBSIterative}`); 
    }
})
//console.log(result); 