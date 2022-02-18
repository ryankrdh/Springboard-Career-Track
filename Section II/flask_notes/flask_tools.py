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


 
    # call backs and errors 

#     Flask dispatches a request in multiple stages which can affect the request, response, and how errors are handled. The contexts are active during all of these stages.

# A Blueprint can add handlers for these events that are specific to the blueprint. The handlers for a blueprint will run if the blueprint owns the route that matches the request.

# Setting up MongoDB
# To begin setting up MongoDB in our application, we need to create an app.py file at the project root folder. This will be our main file.

# In this app.py file, add the following block of code:

# from flask import Flask
# from flask_pymongo import PyMongo

# app = Flask(__name__)
# app.config["MONGO_URI"] = "mongodb://localhost:27017/flaskCrashCourse"
# mongo = PyMongo(app)

# if __name__ == "__main__":
#     app.run(debug=True)
# Here, we have done basic configuration for a basic Flask app. We;

# Have imported the necessary packages.
# Set up the main app variable.
# Initialized an instance of PyMongo.
# Started the app in debug mode. This means that each change we make to the app will be reloaded automatically.