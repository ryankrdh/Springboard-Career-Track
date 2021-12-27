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

Error Handling
Errors
In general, Python raises errors in places JS returns undefined:

provide too few/too many arguments to a function
index a list beyond length of list
retrieve item from dictionary that doesn’t exist
use missing attribute on an instance
conversion failures (eg, converting “hello” to an int)
division by zero
and more!
In general, in Python: explicit is better than implicit

Catching Errors
# try to convert this to a number

try:
    age = int(data_we_received)
    print("You are", age)

except:
    print("Hey, you, that's not an age!")

# next line is run either way
It’s risky, though, to just say except — that catches all errors!

data_we_received = "42"

try:
    age = int(data_we_received)
    print("You are", Age)

except:
    print("Hey, you, that's not an age!")
Better to catch the specific error you’re looking for:

age_we_received = "42"

try:
    age = int(data_we_received)
    print("You are", Age)

except ValueError:
    print("Hey, you, that's not an age!")
Common Exception Types
AttributeError	Couldn’t find attr: o.missing
KeyError	Couldn’t find key: d["missing"]
IndexError	Couldn’t find index: lst[99]
NameError	Couldn’t find variable: not_spelled_right
OSError	Operating system error: can’t read/write file, etc
ValueError	Incorrect value (tried to convert “hello” to int, etc)
Raising Errors
In Python, it’s common for you to “raise” errors to signal problems:

if color not in {"red", "green", "blue"}:
    raise ValueError("Not a valid color!")
Error Handling Pattern
Raise exception when you know it should be an error Handle it at the point you can give good feedback

def bounded_avg(nums):
    "Return avg of nums (makes sure nums are 1-100)"

    for n in nums:
        if n < 1 or n > 100:
            raise ValueError("Outside bounds of 1-100")

    return sum(nums) / len(nums)

def handle_data():
    "Process data from database"

    ages = get_ages(from_my_db)

    try:
        avg = bounded_avg(ages)
        print("Average was", avg)

    except ValueError as exc:
        # exc is exception object -- you can examine it!
        print("Invalid age in list of ages")