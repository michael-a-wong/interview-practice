#include <stdio.h>
#include <stdlib.h>
#include "linkedlist.h"

struct Stack
{
    int *data;
    int position; // last element in the data
};

void push(struct Stack *st, int data)
{
    st->data[++st->position] = data;
}

int pop(struct Stack *st)
{

    if (st->position < 0)
    {
        return 0;
    }

    st->position--;
    return st->data[st->position + 1];
}

int palindrome(struct LinkedList list)
{

    // gets the middle position
    int middle = list.length / 2;
    struct Node *currentNode = list.head;

    struct Stack *stack = malloc(sizeof(struct Stack));
    stack->data = malloc(sizeof(int) * middle);
    stack->position = 0;

    // pop elements on stack
    for (int i = 0; i < middle; i++)
    {
        push(stack, currentNode->data);
        currentNode = currentNode->next;
    }

    // if odd skip one element
    if (list.length % 2 == 1)
    {
        currentNode = currentNode->next;
    }

    for (int i = 0; i < middle; i++)
    {
        int currentDataInStack = pop(stack);
        int currentData = currentNode->data; 

        if (currentData != currentDataInStack) {
            return 0; 
        }


        currentNode = currentNode->next;
    }

    return 1; 
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
    insert(&list, 3);
    insert(&list, 2);
    insert(&list, 1);

   
    printList(list);

    if (palindrome(list)) {
        printf("List is a palindrome\n"); 
    }
    else {
        printf("List is NOT a palindrome\n"); 
    }

    return 1;
}