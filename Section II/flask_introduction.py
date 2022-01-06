# Goals
# Describe the purpose and responsibilities of a web framework
# Build small web applications using Python and Flask
# Set environmental variables for local Flask development
# Handle GET and POST requests with Flask
# Extract data from different parts of the URL with Flask
# Web Frameworks
# A Quick Demo
# (venv) $ FLASK_ENV=development flask run
# * Environment: development
# * Debug mode: on
# * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
# * Restarting with stat
# * Debugger is active!
# * Debugger PIN: 160-080-703
# What is a Web Server?
# A program that’s running on a machine and waiting for a web request.

# Note: A web server is a technology that can process requests and issue responses via HTTP, a protocol used to distribute information on the world wide web. Though it’s also used to refer to computer systems and even internet “appliances,” we’ll use web server to refer to the software running on a machine that’s waiting to respond to HTTP requests.

# Web Application
# The ability to start a server in “listening” for requests, and then issue responses:

# GET /hello     (http://server/hello)
# ↓

# <html>
#   <body>
#     <h1>Hello World!</h1>
#   </body>
# </html>
# Note: To keep code samples short in the presentation, we’re eliding some less-important HTML markup. The shortest valid HTML skeleton in modern HTML would actually be:

# <!doctype html>
# <html>
#   <head>
#     <title>Hello</title>
#   </head>
#   <body>
#     <h1>Hello World!</h1>
#   <body>
# </html>
# Flask is a Web Framework
# Set of functions, classes, etc. that help you define
# Which requests to respond to
# http://server/about-us
# http://server/post/1
# How to respond to requests
# Shows an “About Us” page
# Show the 1st blog post
# Like a library, but bigger and more opinionated
# Usage is similar to the Python Standard Library.
# Using the Python Standard Library

# from random import choice, randint
 
# Using Flask

# from flask import Flask, request

# What Do Web Applications Need To Do?
# handle web requests
# produce dynamic HTML
# handle forms
# handle cookies
# connect to databases
# provide user log-in/log-out
# cache pages for performance
# & more!
# Flask Apps
# Installing Flask
# $ python3 -m venv venv
# $ source venv/bin/activate

# (venv)$ pip3 install flask
# ... lots of stuff ...
# Successfully installed flask Werkzeug Jinja2 ...
# Cleaning up...

# Making An App
# Need to create a “flask application”:

# from flask import Flask

# app = Flask(__name__)
# When we create a Flask application, it needs to know what module to scan for things like routes (covered later)–so the __name__ is required and should always be written like that.

# Running Flask App
# (venv) $ flask run
# (Control-C to quit)

# If your Flask app file isn’t called app:

# (venv) $ FLASK_APP=app.py flask run
# FLASK_APP=app.py is passing an “environmental variable”

# Only has this meaning while this program is running

# Development Mode
# Better to run Flask in “development mode”:

# Much better error messages
# Automatically re-loads server when code changes on disk
# Both of these are very helpful when developing–and very bad for working on a live, production server.

# (venv) $ FLASK_ENV=development flask run
# Setting Environmental Variables
# Can set FLASK_DEV once per terminal session:

# (venv) $ export FLASK_ENV=development
# Add that line to shell config to run on every new terminal session.

