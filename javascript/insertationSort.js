function insertationSort(inputs) {

    for (var i = 1; i < inputs.length; i++) {
        
        var inserted = false; 
        var temp, temp2; 

        for (var j = 0; j <= i; j++) {
             // search for position;

            if (!inserted) {
                if (inputs[i] < inputs[j]) {

                    // swap i with j
                    temp = inputs[j]; 
                    inputs[j] = inputs[i]; 
                     
                    inserted = true; 
                }
            }
            else { // swapped elements in the rest of the array
                
                temp2 = inputs[j]; 
                inputs[j] = temp;
                temp = temp2; 
              }
        }
       
    }
}

var testInputs = [3, 7, 1, 10, 15, 4, 20, 2]; 

insertationSort(testInputs); 

console.log(testInputs); 