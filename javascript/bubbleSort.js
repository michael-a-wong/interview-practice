
function bubbleSort (inputs) {
    var notFlipped = false; 

    var position = 0; 

    while (!notFlipped) {
       
        notFlipped = true; 
        position = 0; 

        for (var i = 1; i < inputs.length; i++) {
            
            if (inputs[position] > inputs[i]) {
                // swap
                var temp = inputs[i]; 
                inputs[i] = inputs[position]; 
                inputs[position] = temp; 
                position = i; 

                notFlipped = false; 
            }

            position++; 
        }
    }
}

var testInputs = [3, 7, 1, 10, 15, 4, 20, 2]; 

bubbleSort(testInputs); 

console.log(testInputs); 