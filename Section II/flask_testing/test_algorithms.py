from unittest import TestCase
from app import reverse_str, is_palindrome, factorial

class AlgorithmsTestCase(TestCase):
    # function names need the word test in it. 
    def test_reverse(self):
        self.assertEqual(reverse_str('hello'), 'olleh')
        self.assertEqual(reverse_str('apple'), 'elppa')
    
    def test_is_palindrome(self):
        self.assertTrue(is_palindrome('racecar'))
        # this one will fail since it is capitalized.
        self.assertTrue(is_palindrome('racecar')) 
        self.assertTrue(is_palindrome('kayak'))
        self.assertFalse(is_palindrome('clue'))

    def test_factorial(self):
        self.assertEqual(factorial(5), 120)
        self.assertEqual(factorial(5), 120)
        # checking to see if exception is raised.
        self.assertRaises(ValueError, factorial, -5)

'''
python -m unittest test_algorithms.py

assertRaises(escdption, callable, *args, **kwrds)
'''