#include <stdio.h>
#include <stdlib.h> 
#include "linkedlist.h"

struct LinkedList * sumLists(struct LinkedList list1, struct LinkedList list2) {

    struct LinkedList * resultList = (LinkedList *) malloc(sizeof(struct LinkedList)); 
    resultList->head = NULL;
    resultList->length = 0;
    
    struct Node * current1 = list1.head; 
    struct Node * current2 = list2.head; 
    int remainder = 0; 

    while (current1 != NULL || current2 != NULL ) {
        int result = 0; 
        int data1 = 0; 
        int data2 = 0; 

        if (current1) {
            data1 = current1->data; 
        }
        if (current2) {
            data2 = current2->data; 
        }

        result = data1 + data2 + remainder; 
        remainder = result / 10; 
        result = result % 10; 

        insert(resultList, result); 

        if (current1) {
            current1 = current1->next; 
        }
        if (current2) {
            current2 = current2->next; 
        }
        
       
    }

    return resultList;
}

int main () {
    
    struct LinkedList list; 
    list.head = NULL;
    list.length = 0;  
    insert(&list, 8); 
    insert(&list, 3); 
    insert(&list, 1); 
    insert(&list, 9); 
    // insert(&list, 3); 
    // insert(&list, 3); 
    // insert(&list, 5); 
    // insert(&list, 2); 
    // insert(&list, 3); 
    // insert(&list, 8); 

    struct LinkedList list1; 
    list1.head = NULL;
    list1.length = 0;  
    insert(&list1, 8); 
    insert(&list1, 3); 
    insert(&list1, 1); 
    insert(&list1, 9); 
    insert(&list1, 3);
   
    printList(list);
    printList(list1);

    struct LinkedList *resultList = sumLists(list, list1); 
    printList( *resultList ); 

    return 1;   
}
