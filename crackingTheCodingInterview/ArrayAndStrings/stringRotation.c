#include <stdio.h>
#include <string.h>
#include <stdlib.h> 

// returns 0 if false, 1 if true
int isSubstring(char * base, char * sub) {

    char * result = strstr(base, sub); 
    if ( result == NULL ) return 0; 
    
    return 1; 
    
}

// returns 0 if false, 1 if true
int isStringRotation(char * s1, char * s2) {
    size_t s1Length = strlen(s1); 
    size_t s2Length = strlen(s2); 

    if (s1Length != s2Length) return 0; 

    int tempIndex = 0; 
    char * tempArray = (char *) malloc(sizeof(char) * s1Length); 

    int i; 
    int pivot = NULL; 
    for (i = 0; i < s1Length; i++) {
        tempArray[tempIndex] = s1[i]; 
        tempIndex++; 
        tempArray[tempIndex] = '\0'; 

        if (! isSubstring(s1, tempArray) ) {
            
            // pivot should change only once
            if (pivot != NULL) return 0; 
            else {
                pivot = tempIndex; 
                tempIndex = 0; 
                memset(tempArray, 0, s1Length); 
            }

        }
    } 

    return 1; 
}


// returns 0 if false, 1 if true
int isStringRotationFast(char * s1, char * s2) {

    size_t s1Length = strlen(s1); 
    size_t s2Length = strlen(s2); 

    if (s1Length != s2Length) return 0; 

    // double the length of the string
    char * tempArray = (char *) malloc(sizeof(char) * 2 * s1Length + 1); 
    memcpy(tempArray, s2, s2Length); 
    memcpy(tempArray + s2Length, s2, s2Length); 
    tempArray[2*s2Length] = '\0'; 

    //printf("%s\n", tempArray); 
    
    return isSubstring(tempArray, s1); 
}

int main() {

    printf("test %d\n", isSubstring("hello world", "wxorl")); 

    printf("test %d\n", isStringRotation("hello", "elloh")); 

    printf("%d\n", isStringRotationFast("hello", "exloh"));
    return 0; 
}
