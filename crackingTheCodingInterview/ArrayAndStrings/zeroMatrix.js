function zeroMatrix(matrix) {
    var zeroI, zeroJ;

    loop1:  
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 0) {
                zeroI = i; 
                zeroJ = j; 
                break loop1; 
            }
        }
    }

    console.log(`i ${zeroI}, j ${zeroJ}`); 
    
    if (zeroI != undefined) {
        for (var j = 0; j < matrix[zeroI].length; j++)
            matrix[zeroI][j] = 0; 

        for (var i = 0; i < matrix.length; i++) {
            if (zeroJ < matrix[i].length ) 
                matrix[i][zeroJ] = 0; 
        }
    }

    return matrix
}

var m = 5; 
var n = 6

var test = new Array(m); 
for (var i = 0; i < test.length; i++) {
    test[i] = new Array(n);
    for (var j = 0; j < test[i].length; j++) {
        test[i][j] = Math.floor(Math.random() * 10);
    } 
}

console.log(test); 
console.log(zeroMatrix(test)); 


