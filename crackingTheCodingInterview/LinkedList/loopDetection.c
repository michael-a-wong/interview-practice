#include <stdio.h>
#include <stdlib.h>
#include "linkedlist.h"

struct Node * detectLoopStart(struct LinkedList list) {

    struct Node * slow; 
    struct Node * fast; 

    if (list.head) {
        slow = list.head; 
        fast = list.head; 
    }
    else return NULL; 

    while (fast && fast->next) {

        slow = slow->next; 
        fast = fast->next->next; 

        // printf("outer loop\n"); 
        if (slow == fast) {
            slow = list.head; 

            while (slow != fast) {
                // printf("inner loop %d, %d\n", slow->data, fast->data);
                slow = slow->next; 
                fast = fast->next; 
            }

            // can return either slow or fast
            return slow; 
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
   
    list.head->next->next->next->next = list.head->next; 

   
    struct Node * iter = list.head; 
    for (int i = 0; i < 10; i++) {
        if (iter) {
            printf("%d, ", iter->data); 
            iter = iter->next; 
        }
    }
    printf("\n"); 

    struct Node * result = detectLoopStart(list); 

    if (result) {
        printf("There is a loop starting at Node %d\n", result->data); 
    }
    else {
        printf("There is NO loop\n"); 
    }


    return 1;
}