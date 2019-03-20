function makeNxN(n) {

    var result = new Array(n);
    var counter = 0; 
    for (var i = 0; i < result.length; i++) {
        result[i] = new Array(n);
        
        for (var j = 0; j < result[i].length; j++) {
            result[i][j] = counter;
            counter++; 
        }
    }
    return result; 
}

//var test = makeNxN(8); 
//console.log(rotateMatrix(test)); 

var test1 = makeNxN(7); 
//console.log(rotateMatrix(test1)); 
//console.log(rotateMatrix(rotateMatrix(test1))); 
//console.log(rotateMatrix(rotateMatrix(rotateMatrix(test1)))); 
//console.log(rotateMatrix(rotateMatrix(rotateMatrix(rotateMatrix(test1))))); 
console.log(test1); 
inPlaceRotate(test1);
console.log(test1); 


function rotateMatrix(matrix) {
    
    var n = matrix.length; 
    var result = new Array(n);

    for (var i = 0; i < n; i++) {
        result[i] = new Array(n);
    }

    for (var i = 0; i < matrix.length; i++) {

        for (var j = 0; j < matrix[i].length; j++) {
            result[n - j - 1][i] = matrix[i][j]; 
        }
    }

    return result; 
}

function inPlaceRotate(matrix) {

    let starti = 0, startj = 0, layer = matrix.length - 1; 

    var n = matrix.length; 
    function fourSwap(i, j) {
        
        let oldtemp = matrix[i][j];
        let oldi = i, oldj = j, newi, newj; 
        let newtemp; 
        for (let it = 0; it < 4; it++) {
            
            // calculate new i, j values
            newi = n - oldj - 1; 
            newj = oldi; 

            newtemp = matrix[newi][newj]; 
            matrix[newi][newj] = oldtemp;
            
            // set old values
            oldtemp = newtemp; 
            oldi = newi; 
            oldj = newj;  
        }
    }

    // layer is the number of elements we look at at each layer. 
    while (layer > 0) {

        // here we are swapping layer times
        for ( let i = 0; i < layer; i++ ) {
            fourSwap(starti, startj + i);
        }
        
        // we are moving to the inner layer now
        layer -= 2; 
        starti++; 
        startj++; 
    }
}

