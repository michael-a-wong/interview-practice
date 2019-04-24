#include <stdio.h>
#include <stdlib.h> 

struct Node {
    int data; 
    struct Node * next; 
} Node; 

struct LinkedList {
    struct Node * head;
    //Node * tail; 
    int length; 
};

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


void printList(struct LinkedList list) {
    struct Node * current = list.head; 
    while (current != NULL) {
        printf("%d, ", current->data); 
        current = current->next; 
    }
    printf("\n"); 
}


int kthToLast(struct LinkedList * list, int k) {
    int listLen = list->length;

    int j = listLen - k; 
    int i = 0; 

    struct Node *current = list->head; 
    while (i < j) {
        current = current->next; 
        i++; 
    }
    
    return current->data;  

}

int main () {
    
    struct LinkedList list; 
    list.head = NULL;
    list.length = 0;  
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
   
    printList(list);

    int k = 4; 
    printf("%dth to last: %d\n", k, kthToLast(&list, k)); 


    return 1;   
}
