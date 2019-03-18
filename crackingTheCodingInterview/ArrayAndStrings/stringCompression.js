function stringCompression(str) {

    var base = ""; 
    var result = ""; 
    var count = 0; 

    for (var i = 0; i < str.length; i++) {
        
        if (base != str[i]) {
            base = str[i]; 
            
            if (count != 0) {
                result += count; 
                count = 0; 
            }
   
            result += base; 
            count++; 

        }
        else {
            count++; 
        }
    }

    if (count != 0) {
        result += count; 
        count = 0; 
    }

    if (result.length < str.length) return result; 

    return str; 
}

var t = "aabcccccaaa"; 
console.log(`${t} -> `, stringCompression(t)); 

var t1 = "abca"; 
console.log(`${t1} -> `, stringCompression(t1)); 
