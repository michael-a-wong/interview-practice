#include "linkedlist.h"

void insert(struct LinkedList *list, int data) {
    
    struct Node * current = list->head; 
    list->length++; 

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

struct Node * getNode(struct LinkedList list, int data) {
    if (list.head) {
        struct Node * curr = list.head; 

        while (curr != NULL) {
            if (curr->data == data) {
                return curr; 
            }
            curr = curr->next; 
        }
    }
    return NULL; 
}

void printList(struct LinkedList list) {
    struct Node * current = list.head; 
    while (current != NULL) {
        printf("%d, ", current->data); 
        current = current->next; 
    }
    printf("\n"); 
}