from app import app
from unittest import TestCase

class ColorsViewsTestCase(TestCase):

    def test_color_form(self):
        # creates a version of our app. Enables us to test code without opening up server
        with app.test_client() as client:
            # import pdb
            # pdb.set_trace()
            res = client.get('/')
            html = res.get_data(as_text=True)
            
            self.assertEqual(res.status_code, 200)
            self.assertIn('<h1>Color Form</h1>', html)