
function heapSort(array) {

    // build heap 
    buildHeap(array, 0); 
    var originalHeapLength = array.length;         

    // remove top until number of elements == 0
    while (originalHeapLength > 1) {
        deleteMax(array, originalHeapLength); 
        originalHeapLength--; 
    }
}

function deleteMax(array, lengthOfHeap) {
    var lastPosition = lengthOfHeap - 1; 

    // swap 
    var max = array[0];
    array[0] = array[lastPosition]; 
    array[lastPosition] = max;  

    heapify(array, 0, lengthOfHeap - 1)
}

function percolate(array, index, lengthOfHeap) {
    var leftChild = (index * 2) + 1; 
    var rightChild = (index * 2) + 2; 
    var max = array[index]; 
    var maxIndex = index; 

    if (leftChild < lengthOfHeap && array[leftChild] > max) {
        max = array[leftChild]; 
        maxIndex = leftChild;  
    }
    if (rightChild < lengthOfHeap && array[rightChild] > max) {
       max = array[rightChild]; 
       maxIndex = rightChild; 
    }
    
    if (maxIndex < lengthOfHeap && maxIndex !== index) {
        // swap
        var temp = array[index]; 
        array[index] = max; 
        array[maxIndex] = temp;

        console.log(`This is maxIndex ${maxIndex}`); 
        percolate(array, maxIndex, lengthOfHeap); 
    }
}

function buildHeap(array, index) {

    var leftChild = (index * 2) + 1; 
    var rightChild = (index * 2) + 2;

    if (leftChild < array.length && leftChild < array.length) {
        buildHeap(array, leftChild); 
    }
    else {
        return; 
    }
   
    if (rightChild < array.length && rightChild < array.length) {
        buildHeap(array, rightChild); 
    }
    else {
        return; 
    }

    // choose the greatest and put on top
    heapify(array, index, array.length); 
}

function heapify(array, index, lengthOfHeap) {
    var leftChild = (index * 2) + 1; 
    var rightChild = (index * 2) + 2;
    
    var max; // = Math.max(array[index], array[leftChild], array[rightChild]);
    var maxIndex; 

    var currentValue = array[index]; 

    var leftValue = (leftChild < lengthOfHeap) ? array[leftChild] : null; 
    var rightValue = (rightChild < lengthOfHeap) ? array[rightChild] : null;

    // I need to check index bounds
    if (currentValue >= leftValue && currentValue >= rightValue) {
        max = currentValue; 
        maxIndex = index; 
    }
    else if ( leftValue >= currentValue && leftValue >= rightValue) {
        max = leftValue; 
        maxIndex = leftChild; 
    }
    else if (rightValue !== null) {
        max = rightValue;
        maxIndex = rightChild; 
    }

    if (index !== maxIndex) {
        // swap 
        array[index] = max; 
        array[maxIndex] = currentValue; 

        percolate(array, maxIndex, lengthOfHeap); 
    }
}

var testInputs = [3, 7, 1, 10, 15, 4, 20, 2]; 

heapSort(testInputs); 

console.log(testInputs); 