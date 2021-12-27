Python Tools & Techniques
Packing / Unpacking
Unpacking
Can “unpack” iterables:

point = [10, 20]

x, y = point
a = 2
b = 3

b, a = (a, b)
Can gather rest using * before variable:

letters = ["a", "b", "c"]

first, *rest = letters
Spread
Can “spread” iterables:

fruits = {"apple", "berry", "cherry"}

foods = ["kale", "celery", *fruits]