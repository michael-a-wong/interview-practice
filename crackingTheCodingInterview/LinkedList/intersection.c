#include <stdio.h>
#include <stdlib.h>
#include "linkedlist.h"

struct Node * intersection(struct LinkedList list1, struct LinkedList list2) {

    struct Node * curr1 = list1.head; 
    struct Node * curr2 = list2.head; 

    int length1 = list1.length; 
    int length2 = list2.length; 

    if (length1 > length2) {
        for (int i = 0; i < length1 - length2; i++) {
            curr1 = curr1->next; 
        }
    }
    else if (length2 > length1) {
        for (int i = 0; i < length2 - length1; i++) {
            curr2 = curr2->next; 
        }
    }

    // linked list should be of same length now
    while (curr1 != NULL) {
        if (curr1 == curr2) 
            return curr1; 
        else {
            curr1 = curr1->next; 
            curr2 = curr2->next; 
        }
    }

    return NULL; 
}

int main()
{

    struct LinkedList list;
    list.head = NULL;
    list.length = 0;
    insert(&list, 1);
    insert(&list, 2);
    insert(&list, 3);
    insert(&list, 4);
    insert(&list, 5);
    insert(&list, 6);
    insert(&list, 7);


    struct LinkedList list2;
    list2.head = NULL;
    list2.length = 0;
    insert(&list2, 1);
    insert(&list2, 10);
    
    list2.head->next->next = list.head->next; 
    list2.length += list.length - 1; 

   
    printList(list);
    printList(list2);

    struct Node * result = intersection(list, list2); 

    if (result) {
        printf("There is an intersection at Node %d\n", result->data); 
    }
    else {
        printf("There is NO intersection\n"); 
    }

    return 1;
}