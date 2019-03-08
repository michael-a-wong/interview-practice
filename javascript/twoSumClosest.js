function twoSumClosest (array, targetSum) {

    var minDiff = Number.POSITIVE_INFINITY; 
    var minLeft = 0; 
    var minRight = array.length - 1; 
    var left = minLeft; 
    var right = minRight; 
    var result = []; 

    while (left < right) {

        var sum = array[left] + array[right]; 
        var diff = Math.abs(sum - targetSum); 

        console.log(`Diff ${diff}, MinDiff ${minDiff}`); 

        if ( diff < minDiff) {
            minDiff = diff; 
            minLeft = left; 
            minRight = right; 
        }


        if ( sum < targetSum) {
            left++; 
        }
        else {
            right--; 
        }

    }

    result = [minLeft, minRight]
    return result; 
}

var testInputs = [10, 22, 28, 29, 30, 40]; 
var x = 54; 

console.log(twoSumClosest(testInputs, x)); 

