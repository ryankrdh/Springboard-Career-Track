from nose.tools import assert_equal
import re
import collections

def anagram(s1, s2):
    # Removes all non-word characters.
    replacements = [('\W', '')] # removes all non-word character
    for old, new in replacements:
        new_s1 = re.sub(old, new, s1.lower())
        new_s2 = re.sub(old, new, s2.lower())
    # Edge case to check if the inputs are the same length.
    print(new_s1, new_s2)
    if len(new_s1) != len(new_s2):
        print(f"The length of both ({new_s1} and {new_s2}) are not equal.")
        return False
    # Create counting dictionary (This could be replaced with DefaultDict from Collections module)
    count = {} # {'g': 0, 'o': 0}
    # Fill dictionary for first input string (adds the counts)
    for letter in new_s1:
        if letter in count:
            count[letter] += 1 # will add a counter to the letter if it exists.
        else:
            count[letter] = 1 # will add one if the letter doesn't exist.
    # Fill dictionary for second input string (subtracts the counts)
    for letter in new_s2:
        if letter in count:
            count[letter] -= 1
        else:
            count[letter] = 1
    # Check that the count is 0. 0 means it is an anagram.
    for num in count:
        if count[num] != 0:
            print('The strings are NOT anagrams')
            return False
    print('The strings are anagrams')
    return True

class AnagramTest:
    def test(self, sol):
        assert_equal(sol('ggggo go@#@#@# go', 'gggggg#$ooo'), True)
        assert_equal(sol('abc', 'cb    #@#a'), True)
        assert_equal(sol('hi man', 'hi     man'), True)
        assert_equal(sol('aabbcc', 'aabbc'), False)
        assert_equal(sol('123', '1 2'), False)
        assert_equal(sol('123', '143'), False)
        print("ALL TEST CASES PASSED")
# Run Tests
t = AnagramTest()
t.test(anagram)