# import re
# patterns = ['term1','term2']

# text = 'This is a string with term1, not the order!'

# for pattern in patterns:
#     print("I'm searching for: " +pattern)
#     if re.search(pattern, text):
#         print("MATCH!!")
#     else:
#         print("NO MATCH")



"""
def shout(text):
    return text.upper()

print(shout("Hello"))

yello = shout

print(yello("Hello"))
"""



def shout(text):
    return text.upper()

def whisper(text):
    return text.lower()

def greet(func):
    greeting = func("Hi I'm created by function passed as an argument")
    print(greeting)


greet(shout)
greet(whisper)