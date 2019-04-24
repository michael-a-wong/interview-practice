#include <stdio.h>
#include <stdlib.h>

int charToInt(char *numString) {
    int result = 0; 
    int i = 0; 
    char currentChar = numString[i]; 
    
    while( currentChar != '\0') {
        result *= 10; 
        result += (int) (currentChar - '0'); 
        currentChar = numString[++i]; 
    }
    
    return result; 
}

int numberOfDigits(int num) {
    int length = 0; 
    
    while (num > 0) {
        length++; 
        num = num / 10; 
    }
    
    return length; 
    
}

char* addStrings(char* num1, char* num2) {
    int num1Int = charToInt(num1); 
    int num2Int = charToInt(num2); 
    
    int resultInt = num1Int + num2Int; 
    int resultLen = numberOfDigits(resultInt); 
    
    char *result = (char *) malloc(sizeof(char) * resultLen); 
    
    int i; 
    
    for (i = resultLen - 1; i >= 0; i--) {
        
        int currentChar = resultInt % 10; 
        result[i] = (char) (currentChar + '0');
        resultInt = resultInt / 10; 
        
    }
    
    return result; 
    
}

int main() {

    char s1[20] = "123"; 
    char s2[20] = "12"; 

    printf("Result %s\n", addStrings(s1, s2)); 

}
