function quickSort( array, low, high ) {

    if (low < high) {
        pivot = partition(array, low, high); 
    
        console.log(`Partition ${array}, pivot ${pivot}`); 
        quickSort(array, low, pivot - 1); 
        quickSort(array, pivot + 1, high); 
    }
    
}

// returns a position
function partition (array, low, high) {

    console.log(`Before Part: ${array}`); 
    console.log(`Low: ${low}, High ${high}`); 
    pivot = array[high]; 
    i = low - 1; 
    
    for (j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++; 

            // swap i and j
            var temp = array[i]; 
            array[i] = array[j]; 
            array[j] = temp; 
        }
    }

    // swap last element into the right position
    i++;
    array[high] = array[i]; 
    array[i] = pivot; 

    return i; 
}

var testInputs = [3, 7, 1, 10, 15, 4, 20, 2]; 

quickSort(testInputs, 0, testInputs.length - 1); 

console.log(testInputs); 