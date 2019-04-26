#include <stdio.h>
#include <stdlib.h> 
#include <limits.h>

#define MAX(x, y) (((x) > (y)) ? (x) : (y))
#define MIN(x, y) (((x) < (y)) ? (x) : (y))

struct Node {
    int data; 
    struct Node *left; 
    struct Node *right; 
} Node; 

struct Node* newNode(int value) 
{ 
    struct Node* temp = malloc(sizeof(struct Node));  
    temp->data = value; 
    temp->left = temp->right = NULL; 
    return (temp); 
} 

// searches for a leaf and returns the closest distance to one
int findLeaf(struct Node *node) {
    if (node->left == NULL && node->right == NULL) {
        return 0; 
    }

    int left = INT_MAX; 
    if (node->left) {
        left = findLeaf(node->left) + 1; 
    }

    int right = INT_MAX; 
    if (node->right) {
        right = findLeaf(node->right) + 1; 
    }

    return MIN( left, right); 
}

// returns the distance from target
int findK(struct Node *node, int target, int * min) {

    if (node == NULL) {
        return -1; 
    }

    // found k
    if (node->data == target) {

        // search for a leaf that is in the node's subtree
        *min = findLeaf(node); 
        return 1; 
    }

    // if left finds k, check right child for a closer leaf
    int leftDistance = findK(node->left, target, min); 
    if (leftDistance != -1) {

        if(node->right) {
            *min = MIN(*min, findLeaf(node->right) + leftDistance + 1); 
        }
        // return new distance to next parent
        return leftDistance + 1; 

    }

    // if right finds k, check left child for a closer leaf
    int rightDistance = findK(node->right, target, min); 
    if (rightDistance != -1) {
        if(node->left) {
            *min = MIN(*min, findLeaf(node->left) + rightDistance + 1);  
        }
        // return new distance to next parent
        return rightDistance + 1; 
    }
    
    return -1; 
}



int main() {

    // struct Node *root  = newNode(1); 
    // root->left  = newNode(3); 
    // root->right = newNode(2);


    struct Node *root  = newNode(1); 
    root->left  = newNode(2); 
    root->right = newNode(3);  
    root->left->left   = newNode(4); 
    root->left->left->left   = newNode(5); 
    root->left->left->left->left  = newNode(6); 
    root->left->left->left->left->left  = newNode(7); 
    root->left->left->left->left->left->left  = newNode(8); 

    int min = INT_MAX; 
    int target = 4; 
    findK(root, target, &min); 

    printf("The closest leaf to %d is %d distance away\n", target, min); 

}