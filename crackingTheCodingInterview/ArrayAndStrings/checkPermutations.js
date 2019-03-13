function checkPermutations( str1, str2 ) {
    
    if (str1.length != str2.length) return false; 

    var frequencyCount = new Array(256); 
    frequencyCount.fill(0); 
    
    for (var i = 0; i < str1.length; i++) {
        var currentChar = str1.charCodeAt(i); 
        var currentChar2 = str2.charCodeAt(i); 

        frequencyCount[currentChar] += 1; 
        frequencyCount[currentChar2] -= 1; 
    }

    for (var i = 0; i < frequencyCount.length; i++) {
        if (frequencyCount[i] != 0) return false; 
    }

    return true; 
}

var test = "asdfjkl;";
var test2 = ";lkjfdsa";
var test3 = "asdfjkll"; 

console.log(checkPermutations(test, test2));  
console.log(checkPermutations(test, test3));  

