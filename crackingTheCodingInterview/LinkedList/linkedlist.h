#include <stdio.h>
#include <stdlib.h> 

struct Node {
    int data; 
    struct Node * next; 
} Node; 

typedef struct LinkedList {
    struct Node * head;
    //Node * tail; 
    int length; 
} LinkedList;



void insert(struct LinkedList *list, int data); 
struct Node * getNode(struct LinkedList list, int data); 
void printList(struct LinkedList list); 