#include <stdio.h>
#include <stdlib.h> 

int smallestPositiveInt(int* inputs, int n) {
    
    // swap values to the correct location 
    for ( int i = 0; i < n; i++) {


        while (inputs[i] > 0 && inputs[i] < n - 1 && (i + 1) != inputs[i]) {
            
            // swap 
            int temp = inputs[inputs[i] - 1]; 
            inputs[inputs[i] - 1] = inputs[i]; 
            inputs[i] = temp;
 
        }
    }

    // check if value is in the correction location
    for ( int i = 0; i < n; i++) {

        if(inputs[i] != i + 1) {
            return i + 1; 
        }
    }

    return -1; 
}

int main() {

    int array[] = {1,2,0};
    printf("smallest missing number %d\n", smallestPositiveInt(array, 3)); 

    // int array[] = {3,4,-1,1};
    // printf("smallest missing number %d\n", smallestPositiveInt(array, 4)); 

    // int array[] = {7,8,9,11,12};
    // printf("smallest missing number %d\n", smallestPositiveInt(array, 5)); 

}