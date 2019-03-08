import math

def maxDifference(nums): 
    max = -1
    for i, e in reversed(list(enumerate(nums))): 
       # print("***" + str(i))
        #print(nums)
        for j in nums[:i:1]:
           # print(j)
            difference = e - j
            if difference > max:
                max = difference
                
    return max

l = [2, 11, 3, -1, 20]

print(maxDifference(l))


def fastMaxDifference(nums): 
    minNum = math.inf
    difference = -1

    for e in nums: 
        difference = max(difference, e - minNum)
        minNum = min(minNum, e)

    return difference

print(fastMaxDifference(l))