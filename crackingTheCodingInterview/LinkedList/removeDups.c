#include <stdio.h>
#include <stdlib.h> 

struct Node {
    int data; 
    struct Node * next; 
} Node; 

struct LinkedList {
    struct Node * head;
    //Node * tail;  
}; 

void insert(struct LinkedList *list, int data) {
    
    struct Node * current = list->head; 

    if (!list->head) {
        list->head = (struct Node*) malloc(sizeof(struct Node));
        list->head->data = data; 
        list->head->next = NULL; 
        return; 
    } 

    while ( current->next != NULL ) {
        current = current->next; 
    }
    
    current->next = (struct Node*) malloc(sizeof(struct Node)); 
    current->next->data = data; 
    current->next->next = NULL; 
    
    //printf("insert %d", data); 
}

void printList(struct LinkedList list) {
    struct Node * current = list.head; 
    while (current != NULL) {
        printf("%d, ", current->data); 
        current = current->next; 
    }
    printf("\n"); 
}

// returns 1 is target is in array, else 0
int inArray(int * array, int arrayLen, int target) {

    int i; 
    for (i = 0; i < arrayLen; i++)  {
        
        if (array[i] == target) return 1; 
    }
    
    return 0; 
}

void removeDups(struct LinkedList * list) {

    int bufferSize = 100; 
    int bufferLen = 0; 
    int *buffer = (int *) malloc(sizeof(int) * bufferSize); 

    struct Node *current = list->head; 
    struct Node *prev = list-> head; 
     
    while (current != NULL) {
        
        if ( inArray(buffer, bufferLen, current->data) ) {
            prev->next = current->next; 
            free(current); 
            current = prev->next; 
            continue; 
        }
        else {
            // add number into the array
            buffer[bufferLen] = current->data;
            bufferLen++;  
            if (bufferLen == bufferSize) {
                printf("resize buffer\n"); 
            }
            prev = current; 
            current = current->next; 
        }
    }
    
}

int main () {
    
    struct LinkedList list; 
    list.head = NULL; 
    insert(&list, 8); 
    insert(&list, 3); 
    insert(&list, 1); 
    insert(&list, 9); 
    insert(&list, 3); 
    insert(&list, 3); 
    insert(&list, 5); 
    insert(&list, 2); 
    insert(&list, 3); 
    insert(&list, 8); 
   
    //printf("head %d", list.head->data);  
    printList(list);
    removeDups(&list); 
    printList(list);

    return 1;   
}

