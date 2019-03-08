
function interpolationSearch (array, lo, high, target) { 
    
    if (lo > high) {
        return null; 
    }
    
    var pos = Math.floor(lo + ( ( target - array[lo] ) * (high - lo) / (array[high] - array[lo]) )); 
    
    if (array[pos] === target) {
        return array[pos]; 
    }
    else if (array[pos] < target) {
        return interpolationSearch(array, pos + 1, high, target);
    }
    else {
        return interpolationSearch(array, lo, pos - 1, target); 
    }
}

var inputs = [1, 5, 10, 15, 20, 25, 30, 35, 40]; 
var target = 5;

// var result = interpolationSearch(inputs, 0, inputs.length - 1, target);
    
// if (result == target) {
//     console.log(`Found ${target}`); 
// }
// else {
//     console.log(`Did not find ${target}`); 
// }

inputs.forEach(function(element) {
    var result = interpolationSearch(inputs, 0, inputs.length - 1, element);
    
    if (result == element) {
        console.log(`Found ${element}`); 
    }
    else {
        console.log(`Did not find ${element}`); 
    }
})