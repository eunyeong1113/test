""" def plus(a,b):
    if type(b) is str:
        return None
    else:
        return a + b
print(plus(5,"10")) """
def plus(a,b):
    if type(b) is int or type(b) is float:
        return a + b
    else:
        return None
print(plus(5,13.2))