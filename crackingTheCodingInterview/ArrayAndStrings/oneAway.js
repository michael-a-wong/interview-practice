function oneAway(str1, str2) {

    process.stdout.write(`${str1}, ${str2} -> `);     
    var frequency = new Array(256).fill(0);  
    
    for (var i = 0; i < str1.length; i++) {
        frequency[str1.charCodeAt(i)]++; 
    }

    for (var i = 0; i < str2.length; i++) {
        frequency[str2.charCodeAt(i)]--; 
    }

    var inserts = 0; 
    var deletes = 0; 
    for (var i = 0; i < frequency.length; i++) {
        var differenceFrequency = frequency[i]; 

        if (differenceFrequency < -1 || differenceFrequency > 1) return false; 
        else if ( differenceFrequency == 1) inserts++; 
        else if (differenceFrequency == -1) deletes++; 

    }


    if ( inserts < 2 && deletes < 2 )
        return true; 

   return false; 
}


var t1 = "pale"; 
var t2 = "ple"; 
var t3 = "pales"; 
var t4 = "bale"; 
var t5 = "bake"; 

console.log(oneAway(t1, t2)); 
console.log(oneAway(t3, t1)); 
console.log(oneAway(t1, t4)); 
console.log(oneAway(t1, t5)); 

console.log(oneAway("tessst", "test")); 
