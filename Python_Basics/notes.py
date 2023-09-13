try:
    f = open('simple.txt','w')
    f.write("Test write to Simple text!!")

except IOError:
    print("Error: Could not find file or read data")

else:
    print("SUCCESS!!")
    f.close()
