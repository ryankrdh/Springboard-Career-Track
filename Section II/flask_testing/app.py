# from nose.tools import assert_equal
# import re
# import collections

# def anagram(s1, s2):
#     # Removes all non-word characters.
#     replacements = [('\W', '')] # removes all non-word character
#     for old, new in replacements:
#         new_s1 = re.sub(old, new, s1.lower())
#         new_s2 = re.sub(old, new, s2.lower())
#     # Edge case to check if the inputs are the same length.
#     print(new_s1, new_s2)
#     if len(new_s1) != len(new_s2):
#         print(f"The length of both ({new_s1} and {new_s2}) are not equal.")
#         return False
#     # Create counting dictionary (This could be replaced with DefaultDict from Collections module)
#     count = {} # {'g': 0, 'o': 0}
#     # Fill dictionary for first input string (adds the counts)
#     for letter in new_s1:
#         if letter in count:
#             count[letter] += 1 # will add a counter to the letter if it exists.
#         else:
#             count[letter] = 1 # will add one if the letter doesn't exist.
#     # Fill dictionary for second input string (subtracts the counts)
#     for letter in new_s2:
#         if letter in count:
#             count[letter] -= 1
#         else:
#             count[letter] = 1
#     # Check that the count is 0. 0 means it is an anagram.
#     for num in count:
#         if count[num] != 0:
#             print('The strings are NOT anagrams')
#             return False
#     print('The strings are anagrams')
#     return True

# class AnagramTest:
#     def test(self, sol):
#         assert_equal(sol('ggggo go@#@#@# go', 'gggggg#$ooo'), True)
#         assert_equal(sol('abc', 'cb    #@#a'), True)
#         assert_equal(sol('hi man', 'hi     man'), True)
#         assert_equal(sol('aabbcc', 'aabbc'), False)
#         assert_equal(sol('123', '1 2'), False)
#         assert_equal(sol('123', '143'), False)
#         print("ALL TEST CASES PASSED")
# # Run Tests
# t = AnagramTest()
# t.test(anagram)


# --------------------------------------------------------------------

def adder(x, y):
    """ adds two numbers"""
    print("INSIDE ADDER!")
    return x + y

assert adder(2, 7) == 10, "expected 2+7 to be 10"

'''
assert expects some condition to be true, if it isn't it will raise an error
assert will stop the rest of the code from running so it's bad for comprehensive coding. It doesn't print out expected value or feedback.
python -O app.py will run the app ignoring the assert.

'''
# ------------------------------------------------------------------------

def adder(x, y):
    """ adds two numbers 
    >>> adder(3,5)
    8

    >>> adder(-1, 50)
    49
    """

    return x + y

'''
DocTests:

run "python" on terminal. 
type: from app import adder
adder(3,5)

copy the output you get in the terminal in the doctest.

To run the test "verbosely":
python -m doctest -v app.py

*it makes functions ugly if we are testing a complex long function.
'''

# ----------------------------------------------------------
import arithmetic
from unittest import TestCase

class AdditionTestCase(TestCase):
    """
    Examples of unit tests.
    """

    def test_adder(self):
        assert arithmetic.adder(2, 3) == 5

    # this one will give a better feedback
    def test_adder_2(self):
        self.assertEqual(arithmetic.adder(2,2), 4)
        self.assertEqual(arithmetic.adder(40,50), 90)

'''
Unittest module:

to run:
python -m unittest app.py

'''

# ----------------------------------------------------------

def reverse_str(s):
    """Returns reverse of input str (s)"""
    return s[::-1]

def isPalindrome(s):
    """Boolean method to check whether given string is a palindrome"""
    rev = reverse_str(s)
    return s == rev

def factorial(n):
    """Calculates factorial iteratively."""
    if not (isinstance(n, int) and n >= 0):
        raise ValueError("'n' must be a non-negative integer.")
    if n == 0:
        return 
    result = 1
    for i in range(2, n+1):
        result *= i
    return 
    
"""
assertRaises(escdption, callable, *args, **kwrds)
"""