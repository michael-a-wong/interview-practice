function isUnique (testString) {
    var set = new Set(); 
    for (var i = 0; i < testString.length; i++) {

        var currentChar = testString.charCodeAt(i); 
        if (!set.has(currentChar)) {
            set.add(currentChar); 
        }
        else {
            return false; 
        }
    }
    return true; 
}

var myTest = "asdfjk"; 
var sentence = 'The quick brown fox jumps over the lazy dog.';

console.log(isUnique(myTest)); 
console.log(isUnique(sentence)); 