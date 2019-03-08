function MergeSort (array) {

    var result; 
    var inputLength = array.length; 

    return result = recMerge(array, 0, inputLength - 1);
}; 

function recMerge(array, leftPosition, rightPosition){
    
    //console.log(`test left: ${leftPosition} right: ${rightPosition}`); 
    if (rightPosition === leftPosition) {
        // mostly need to change
        //console.log("inside ===");
        var resultArray = []
        resultArray.push(array[leftPosition])
        return resultArray; 
    }
    else {

        var leftArray, rightArray; 
        var middle = leftPosition + Math.floor((rightPosition - leftPosition) / 2); 

        leftArray = recMerge(array, leftPosition, middle); 
        rightArray = recMerge(array, middle + 1, rightPosition); 

        //console.log(`This is left ${leftArray} this is right: ${rightArray}`); 
        return merge(array, leftArray, rightArray);
    }


}; 

function merge(array, leftArray, rightArray) {

    var result = []
    var sumLength = leftArray.length + rightArray.length; 
    var leftIndex = rightIndex = 0; 

    for (var i = 0; i < sumLength; i++) {

        if (leftIndex >= leftArray.length) {
            result.push(rightArray[rightIndex]); 
            rightIndex++; 
        }
        else if (rightIndex >= rightArray.length) {
            result.push(leftArray[leftIndex]); 
            leftIndex++;  
        }
        else if (leftArray[leftIndex] < rightArray[rightIndex]) {
            result.push(leftArray[leftIndex]); 
            leftIndex++; 
        }
        else {
            result.push(rightArray[rightIndex]); 
            rightIndex++; 
        }
    }

    //console.log(`This is result: ${result}`); 
    return result; 
}

var testInputs = [3, 7, 1, 10, 15, 4, 20, 2]; 

var testResults = MergeSort(testInputs); 

console.log(`Result: ${testResults}`); 