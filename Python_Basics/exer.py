# s = 'django'

# print(s[0], s[4],s[:4],s[1:4],s[4:],s[::-1])

# l = [3,7,[1,4,'hello']]
# print(l)
# l[2][2] = 'goodbye'
# print(l)

d1 = {'simple_key':'hello'}
print(d1['simple_key'])

d2 = {'k1':{'k2':'hello'}}
print(d2['k1']['k2'])

d3 = {'k1':[{'nest_key':['this is deep',['hello']]}]}
print(d3['k1'][0]['nest_key'][1][0])


age = 4
name = "sammy"
print("hello my dog's name is {b} and he is {a} years old".format(a=age, b=name))

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        index = 0
        for i in range(len(nums)):
            if nums[i] != val:
                nums[index] = nums[i]
                index += 1
        return index
