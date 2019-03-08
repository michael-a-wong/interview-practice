class Node:
    
    def __init__(self, input = None):
        self.data = input
        self.next = None
        self.prev = None

class LinkedList:

    def __init__(self):
        self.first = Node()
        self.last = self.first

    def insert(self, input): 
        if self.first.data is None: 
            self.first.data = input
        else:
            currentNode = self.first
            
            while currentNode.next is not None: 
                currentNode = currentNode.next
            
            self.last = Node(input)
            currentNode.next = self.last
            self.last.prev = currentNode

    def __iter__(self):

        current = self.first

        while current is not None: 
            yield current.data
            current = current.next


    def delete(self, value):
        prev = None
        current = self.first

        while current.data is not value:
            prev = current
            if current.next is not None:
                current = current.next
            else:
                return
            
        # if you exit the loop then current is value

        prev.next = current.next

        if current is self.last:
            self.last = prev
        else:
            current.next.prev = prev

        del current


    def print(self):

        for x in self: 
            print(x)

        # currentNode = self.first

        # if currentNode.data == None:
        #     print("List has no elements")
        #     return

        # print(currentNode.data)
       
        # while currentNode.next is not None: 
        #     currentNode = currentNode.next
        #     print(currentNode.data)
    
    def reversePrint(self):
        current = self.last
        while current is not None:
            print(current.data)
            current = current.prev


lt = LinkedList()
lt.insert(4)
lt.insert(5)
lt.insert(6)
lt.insert(7)
lt.insert(8)

lt.print() 
print("******")
lt.reversePrint()

lt.delete(6)
print("******")
lt.print()
print("******")
lt.reversePrint()

lt.delete(8)
print("******")
lt.print()
print("******")
lt.reversePrint()




