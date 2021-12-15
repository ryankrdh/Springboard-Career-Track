# http://curric.rithmschool.com/springboard/lectures/python-ds/

# Python Data Structures
# Includes excellent, high-performance data structures as part of language.

# Length of Structure
# Generic len(x) returns length of x:

# In JS. you use "hello".length. in python you do len("hello")

# # chars in string
# # items in list
# # items in dictionary
# # items in a set

# This will make list from iterating over argument:

# letters = list("apple")   # ['a', 'p', 'p', 'l', 'e']
# Membership
# Can check for membership with in:

# if "taco" in foods:
#     print("Yum!")

# if "cheese" not in foods:
#     print("Oh no!")
# Retrieving By Index
# Can retrieve/mutate item with [n]:

# print(fav_foods[0])

# vegan_no_nos = ['eggs', 'meat', 'milk', 'fish']
# pie_ingredients = ['flour', 'apples', 'sugar', 'eggs']

# for food in pie_ingredients:
#     if food in vegan_no_nos:
#         print(f"oh no, cannot eat {food}! not vegan")
#     else:
#         print(f"yum. I love {food}")


# fav_foods[0] = "taco"
# fav_foods[-1]   # last item

# fav_foods[-3]   # third from end
# Slicing
# Can retrieve list from list:

# lst[start:stop:step]

# start: Index to begin retrieval (default start)
# stop: Index to end retrieval before (default: end)
# step: Number to step (default: 1)
# alpha = ['a', 'b', 'c', 'd', 'e']

# alpha[2:]        # ['c', 'd', 'e']
# alpha[2:4]       # ['c', 'd']
# alpha[:3]        # ['a', 'b', 'c']
# alpha[::2]       # ['a', 'c', 'e']
# alpha[3:0:-1]    # ['d', 'c', 'b']
# alpha[::-2]      # ['e', 'c', 'a']
# Splicing
# Can assign a list to a splice:

# alpha = ['a', 'b', 'c', 'd', 'e']

# alpha[2:] = ['y', 'z']
# print(alpha)            # ['a', 'b', 'y', 'z']

# alpha[1:3] = []
# print(alpha)            # ['a', 'z']
# Core API
# l.append(x)	Add x to end of of list
# l.copy()	Return shallow copy of list l
# l.count(x)	Return # times x appears in l
# l.extend(l2)	Add items of l2 to l
# l.index(x)	Return (0-based) index of x in l
# l.insert(i, x)	Insert x at position i
# l.pop(i)	Remove & return item at i (default last)
# l.reverse()	Reverse list (change in place)
# l.sort()	Sort list in place
# Differences From JS Arrays
# Can’t add new item with []:

# alpha = ['a', 'b', 'c']
# alpha[3] == 'd'           # error!
# alpha.append('d')         # ok!
# Functions that mutate list return None, not data:

# JavaScript
# let ltrs = ["c", "a", "b"];
# ltrs.sort(); // sorts in-place; returns ltrs
 
# Python
# ltrs = ["c", "a", "b"]
# ltrs.sort() # sorts in-place; returns None
# Strings
# Immutable sequence of characters (like JS)

# Making Strings
# msg = "Hello!"
# also = 'Oh hi!'

# long_msg = """This can continue on for several
# lines of text"""

# greet = f"Hi, {fname} {lname}"

# email = f"""Dear {user},
# You owe us ${owed}. Please remit."""
# nums = [1, 2, 3]

# str(nums)     # "[1, 2, 3]"
# Membership / Substrings
# Can use in for membership ("e" in "apple")

# Can slice to retrieve substring ("apple"[1:3] == "pp")

# Cannot splice; strings are immutable!
# Can iterate over, get letter-by-letter:

# for letter in word:
#     print(letter)
# Core API
# s.count(t)	Returns # times t occurs in s
# s.endswith(t)	Does s end with string t?
# s.find(t)	Index of first occurence of t in s (-1 for failure)
# s.isdigit()	Is s entirely made up of digits?
# s.join(seq)	Make new string of seq joined by s ("|".join(nums))
# s.lower()	Return lowercased copy of s
# s.replace(old,new,count)	Replace count (default: all) occurrences of t in s
# s.split(sep)	Return list of items made from splitting s on sep
# s.splitlines()	Split s at newlines
# s.startswith(t)	Does s start with t?
# s.strip()	Remove whitespace at start/end of s
# Dictionaries
# Mutable, ordered mapping of keys → values

# O(1) runtime for adding, retrieving, deleting items

# (like JS object or Map)

# Making Dictionaries
# fruit_colors = {
#     "apple": "red",
#     "berry": "blue",
#     "cherry": "red",
# }
# Values can be any type

# Keys can be any immutable type

# my_dict = {
#     "ok": "yes",
#     42: "all good",
#     [1,2]: 2
# } # ERR: not immutable
# Membership & Retrieval
# in checks for membership of key ("apple" in fruit_colors)
# [] retrieves item by key (fruit_colors['apple'])
# Cannot use dot notation, though (no fruit_colors.apple)
# Failure to find is error (can say .get(x, default))
# Looping over Dictionaries
# ages = {"Whiskey": 6, "Fluffy": 3, "Ezra": 7}

# for name in ages.keys():
#     print(name)

# for age in ages.values():
#     print(age)

# for name_and_age in ages.items():
#     print(name_and_age)
# Can unpack name_and_age while looping:

# for (name, age) in ages.items():
#     print(name, "is", age)
# JS calls this same idea “destructuring”.

# Core API
# d.copy()	Return new copy of d
# d.get(x, default)	Retrieve value of x (return optional default if missing)
# d.items()	Return iterable of (key, value) pairs
# d.keys()	Return iterable of keys
# d.values()	Return iterable of values
# Sets
# Unordered, unique collection of items, like JS Set

# O(1) runtime for adding, retrieving, deleting

# Making Sets
# Use {}, but with only keys, not key: value

# colors = {"red", "blue", "green"}
# Can use constructor function to make set from iterable:

# set(pet_list)   # {"Whiskey", "Fluffy", "Ezra"}

# set("apple")    # {"a", "p", "l", "e"}
# Any immutable thing can be put in a set

# Membership
# Use in for membership check:

# "red" in colors
# Core API
# s.add(x)	Add item x to s
# s.copy()	Make new copy of s
# s.pop()	Remove & return arbitrary item from s
# s.remove(x)	Remove x from s
# Set Operations
# moods = {"happy", "sad", "grumpy"}

# dwarfs = {"happy", "grumpy", "doc"}


# moods | dwarfs    # union: {"happy", "sad", "grumpy", "doc"}

# moods & dwarfs    # intersection: {"happy", "grumpy"}

# moods - dwarfs    # difference: {"sad"}
# dwarfs - moods    # difference: {"doc"}

# moods ^ dwarfs    # symmetric difference: {"sad", "doc"}
# (These are so awesome!)

# Tuples
# Immutable, ordered sequence

# (like a list, but immutable)

# Making Tuples
# t1 = (1, 2, 3)

# t2 = ()           # empty tuple

# t3 = (1,)         # one-item tuple: note trailing comma
# Can use constructor function to make tuple from iterable:

# ids = [1, 12, 44]

# t_of_ids = tuple(ids)
# What Are These Good For?
# Slightly smaller, faster than lists

# Since they’re immutable, they can be used as dict keys or put into sets

# Comprehensions
# Python has filter() and map(), like JS

# But comprehensions are even more flexible

# Filtering Into List
# Instead of this:

# evens = []

# for num in nums:
#     if num % 2 == 0:
#         evens.append(num)
# You can say this:

# evens = [num for num in nums if num % 2 == 0]
# Mapping Into List
# Instead of this:

# doubled = []

# for num in nums:
#     doubled.append(num * 2)
# You can say this:

# doubled = [num * 2 for num in nums]
# Can combine this mapping and filtering:

# doubled_evens = [n * 2 for n in nums if n % 2 == 0]
# Super Flexible
# Can make lists via comprehensions from any kind of iterable:

# vowels = {"a", "e", "i", "o", "u"}
# word = "apple"

# vowel_list = [ltr for ltr in word if ltr in vowels]
# Can make “dictionary comprehensions” and “set comprehensions”:

# evens_to_doubled = {n: n * 2 for n in nums if n % 2 == 0}

# a_words = {w for w in words if w.startswith("a")}


# //-----------------------------------------------------//
# //-----------------------------------------------------//
# //-----------------------------------------------------//

# Lists ---------------------------------------
# Like JS arrays:
# Mutable, ordered sequence
# O(n) to search, add, delete
# Except when at end: O(1)
# Making Lists
# alpha = ['a', 'b', 'c']
# Can use constructor function, list()

# ** difference between arrays and lists in python:
# arrays need to be declared. Lists don't.
# arrays can store data very compactly
# arrays are great for numerical operations.

# Dictionaries ----------------------------------
# Mutable, ordered mapping of keys -> values
# O(1) runtime for adding, retrieving, deleting items 
# (like JS object or Map)
# every key in object in js becomes a string. However, python can use any immutable type.

# Dictionaries in python are purely a data structure to store key value pairs. The keys can be anything that isn't immutable. 
# in checks for membership of key ("apple" in fruit_colors)
# [] retrieves item by key(fruit_colors['apple'])
# cannot use dot notation (fruit_colors.apple) unlike JS
# failure to find is error so use default. (.get(x, default))
# ordered by insertion order. only holds key value pair.

# sets ----------------------------------

# unordered, unique cllection of items, like JS Set
# O(1) runtime for adding, retrieving, deleting
# no duplicates. not ordered. lets are iterables
# JS needs 
# things that can go in the set: numbers, strings, boolean. No list/dict since it only accepts immutable.
# python can only hash immutable items
 
# Set Operations:
# x.union(y) OR x | y: combined set with no duplicates.
# x.intersection(y) OR x & y: returns the duplicates only
# x.difference(y) OR x - y: returns whats left of x
# y.difference(x) OR y - x: returns whats left of y
# x.symmetric_difference(y) OR x ^ y: only returns things that are single. 
 
# The shortcut operators will only work with sets. Named methods will work with iterables by turning them into sets. However, you need to call it on the set, not the iterable. 

# Tuples -------------------------------------
# They are like lists but immutable. Ordered sequence.
# making tuples:
# t1 = (1, 2, 3)
# t2 = ()
# t3 = (1,)
#  advantages are that they are slightly smaller and faster than lists.
#  Since they are immutable, they can be used as dict keys or put into sets. You can't add list to dict or set since items are mutable. 
# (1, 2, 3, 1, 2).index(3) (first index where 3 occurs)
# returns 2
 
#  comprehensions --------------------------------
# don't exist in js.
# Python has filter() and map(), like JS but comprehensions are even more flexible
# Python's list comprehension is better than filter() and map()
# [num * 2 for num in nums]
# [what_to_append for thing in list]
# combining both mappping and filtering:
# [n * 2 for n in nums if n % 2 == 0]

# nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# Turn this:
# evens = []
# for num in nums:
#     if num % 2 == 0:
#         evens.append(num)

# print(evens)

# Into this:
# evens = [num for num in nums if num % 2 ==0]

# grsdes = ["PASS" if score >= 70 else "FAIL" for score in scores]

# return morse_code.get(ltr.upper(), '') use to this avoid edge cases

# def get_morese_code(phrase):
#   return " ".join([get_letter(char) for char in phrase])

# {num: num * num for num in range(1, 10) if num % 2 == 0}

# {char for char in 'hello darkness my old friend' if char not in 'aeiou'}
# -------------------------------
# filter(function, iterable) example:
# letters = ['a', 'b', 'd', 'e', 'i', 'j', 'o']

# # a function that returns True if letter is vowel
# def filter_vowels(letter):
#     vowels = ['a', 'e', 'i', 'o', 'u']
#     return True if letter in vowels else False

# filtered_vowels = filter(filter_vowels, letters)

# # converting to tuple
# vowels = tuple(filtered_vowels)
# print(vowels)

# Output
# ('a', 'e', 'i', 'o', 'u')

# --------------------------------
# map(function, iterable) example
# def addition(n):
#     return n + n
  
# # We double all numbers using map()
# numbers = (1, 2, 3, 4)
# result = map(addition, numbers)
# print(list(result))
# Output :

# [2, 4, 6, 8]

# ---------------------------------