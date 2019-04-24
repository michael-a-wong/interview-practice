#include <stdio.h>
#include <stdlib.h>

struct Node
{
    int data;
    struct Node *next;
} Node;

struct LinkedList
{
    struct Node *head;
    //Node * tail;
    int length;
};

void insert(struct LinkedList *list, int data)
{

    struct Node *current = list->head;
    list->length++;

    if (!list->head)
    {
        list->head = (struct Node *)malloc(sizeof(struct Node));
        list->head->data = data;
        list->head->next = NULL;
        return;
    }

    while (current->next != NULL)
    {
        current = current->next;
    }

    current->next = (struct Node *)malloc(sizeof(struct Node));
    current->next->data = data;
    current->next->next = NULL;

    //printf("insert %d", data);
}

struct Node *getNode(struct LinkedList list, int data)
{
    if (list.head)
    {
        struct Node *curr = list.head;

        while (curr != NULL)
        {
            if (curr->data == data)
            {
                return curr;
            }
            curr = curr->next;
        }
    }
    return NULL;
}

void printList(struct LinkedList list)
{
    struct Node *current = list.head;
    while (current != NULL)
    {
        printf("%d, ", current->data);
        current = current->next;
    }
    printf("\n");
}

void deleteMiddleNode(struct Node *n)
{
    if (n->next)
    {
        n->data = n->next->data;
        n->next = n->next->next;
        free(n->next);
    }
    else
    {
        free(n);
    }
}


void partition(struct LinkedList *list, int value)
{
    struct Node *curr = list->head;

    while (curr != NULL)
    {
        struct Node* toBeMoved = curr->next; 
        if (toBeMoved != NULL)
        {
            if (toBeMoved->data < value)
            {
                // push(list, remove(curr->next));
                curr->next = toBeMoved->next; 
                toBeMoved->next = list->head; 
                list->head = toBeMoved; 
                continue; 
            }
        }

        curr = curr->next;
    }
}

int main()
{

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

    partition(&list, 5); 

    printList(list);

    return 1;
}
