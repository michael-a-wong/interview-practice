function pp(str) {

    var letterFrequency = new Array(256).fill(0); 
    
    for (var i = 0; i < str.length; i++) {
        letterFrequency[str.charCodeAt(i)]++; 
    }

    var oddCount = 0, oddLetter = ""; 
    var letters = ""; 

    for (var i = 0; i < letterFrequency.length; i++) {
        if (letterFrequency[i] % 2 == 1) {
            oddCount++; 
            oddLetter = String.fromCharCode(i).repeat(letterFrequency[i]); 
        }
        else if (letterFrequency[i] > 0) {
            for (var j = 0; j < letterFrequency[i]; j += 2 ) {
                letters = letters + String.fromCharCode(i); 
            }
        }
    }

    if (oddCount > 1) return false; 

    var results = []; 
    makePermutations(oddLetter, letters); 
    return results; 

    function makePermutations(base, letters) {

        if (letters.length <= 0) {
            if (!results.includes(base))
                results.push(base);
            return 
        } 

        for (var i = 0; i < letters.length; i++) {
            var myChar = letters[i]; 
            var newBase = myChar; 
            newBase = newBase + base; 
            newBase = newBase + myChar; 
            var newLetters = letters.slice(0, i) + letters.slice(i + 1, letters.length); 
            makePermutations(newBase, newLetters); 
        }

    }

}


var test = "tactcoa"; 
var test2 = "asddfasdf"; 
var test3 = "asdfdf"; 
console.log(pp(test)); 
console.log(pp(test2)); 
console.log(pp(test3)); 
