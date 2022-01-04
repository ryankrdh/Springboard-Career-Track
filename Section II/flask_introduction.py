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