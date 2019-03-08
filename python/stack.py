class Stack:
    
    def __init__(self):
        #self.top
        self.data  = []
    
    def pop(self): 
        return self.data.pop()

    def push(self, input): 
        self.data.append(input)

    def __iter__(self):
        for i in self.data:
            yield i
    
    def print(self):
        for i in self:
            print(i)


st = Stack()
st.push(1)
st.push(9)
st.push(3)
st.push(8)
st.push(4)

print(st)