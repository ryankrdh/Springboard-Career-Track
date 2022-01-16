# Goals
# Explore other common features of web frameworks like Flask, including:
# Redirecting
# Flash messaging
# Returning JSON data
# Debug Flask errors from the error page
# Set break points in Python code with pdb
# Redirecting
# What is an HTTP redirect?

# An HTTP response
# The status code is a “redirect code” (often, 302)
# It contains a URL for browser to re-request
# Typically, for ancient browsers, contains HTML with a link
# $ curl -v http://localhost:5000/redirect-me

# < HTTP/1.0 302 FOUND
# < Content-Type: text/html; charset=utf-8
# < Location: http://localhost:5002/somewhere-else

# <h1>Redirecting...</h1>
# <p>You should be redirected automatically to target URL:
#  <a href="/somewhere-else">/somewhere-else</a>.
#  If not click the link.</p>
# Your browser won’t typically show you this page — it makes the re-request so fast you don’t even notice it happened!



# --------------------------- EXAMPLES ----------------------------

# Goals
# Explore other common features of web frameworks like Flask, including:
# Redirecting
# Flash messaging
# Returning JSON data
# Debug Flask errors from the error page
# Set break points in Python code with pdb
# Redirecting
# What is an HTTP redirect?

# An HTTP response
# The status code is a “redirect code” (often, 302)
# It contains a URL for browser to re-request
# Typically, for ancient browsers, contains HTML with a link
# $ curl -v http://localhost:5000/redirect-me

# < HTTP/1.0 302 FOUND
# < Content-Type: text/html; charset=utf-8
# < Location: http://localhost:5002/somewhere-else

# <h1>Redirecting...</h1>
# <p>You should be redirected automatically to target URL:
#  <a href="/somewhere-else">/somewhere-else</a>.
#  If not click the link.</p>
# Your browser won’t typically show you this page — it makes the re-request so fast you don’t even notice it happened!



# --------------------------- EXAMPLES ----------------------------

from flask import Flask, request, render_template, redirect
from random import choice, sample
# import code; code.interact(local=dict(globals(), **locals()))
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"
# To remove debug tool interception
app.config['DEBUG_TB_INTERCEPT_REDIRECTS']
debug = DebugToolbarExtension(app)

COMPLIMENTS = ["cool", "clever", "tenacious", "awesome", "Pythonic"]



@app.route('/old-home-page')
def redirect_to_home():
    """redirects to new home page"""
    return redirect("/")