var testInputs = [ 5, 8, 10, 14, 19, 20, 0, 1, 3, 4];
// var testInputs = [19, 20, 0, 1, 3, 4, 5, 8, 10, 14];

var bsRecursRotated = function( array, left, right, target) {

    if (left <= right) {

        var middle = left + Math.floor((right - left + 1) / 2); 

        if (array[middle] == target) {
            return array[middle]; 
        }

        // check if left is normal 
        if ( array[left] < array[middle]) {
            // check normal left first
            if (target < array[middle] && target >= array[left]) {
                return bsRecursRotated(array, left, middle - 1, target); 
            }
            else return bsRecursRotated(array, middle + 1, right, target); 
        }
        else { // right is normal
            // check normal right first
            if (target > array[middle] && target <= array[right]) {
                return bsRecursRotated(array, middle + 1, right, target); 
            }
            else return bsRecursRotated(array, left, middle - 1, target); 
        }
    }
    return -1; 
}

testInputs.forEach(function(element) {
    var testBSRecursRotated = bsRecursRotated(testInputs, 0, testInputs.length - 1, element); 
    if (testBSRecursRotated === element) {
        console.log(`Found ${element}`); 
    }
    else {
        console.log(`Did not find ${element}. Found ${testBSRecursRotated}.`)
    }
});

var testBSRecursRotated = bsRecursRotated(testInputs, 0, testInputs.length - 1, 11); 
if (testBSRecursRotated === 100) {
    console.log(`Found ${100}`); 
}
else {
    console.log(`Did not find 100. Found ${testBSRecursRotated}.`)
}