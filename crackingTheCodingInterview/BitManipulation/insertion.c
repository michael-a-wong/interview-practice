#include <stdio.h>
#include <stdlib.h>

unsigned int insertion(unsigned int N, unsigned int M, int i, int j)
{
    unsigned all1s = ~1; 

    unsigned int maskJ = all1s << (j + 1); 
    unsigned int maskI = (1 << i) - 1; 
    unsigned int mask = maskJ | maskI; 

    return (N & mask) | (M << i);
}

void printBinary(unsigned n)
{
    unsigned i;

    printf("0x");

    for (i = 1 << 31; i > 0; i = i / 2)
    {
        (n & i) ? printf("1") : printf("0");
    }

    printf("\n");
}

int main()
{
    unsigned int N = (1 << 10) | (60);
    unsigned int M = 19;

    printBinary(N);
    printBinary(M);

    printBinary(insertion(N, M, 2, 6));
}