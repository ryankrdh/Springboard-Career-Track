from flask import Flask, request, render_template, redirect, flash
from random import choice, sample
# import code; code.interact(local=dict(globals(), **locals()))
from flask_debugtoolbar import DebugToolbarExtension

app = Flask(__name__)
app.config['SECRET_KEY'] = "oh-so-secret"
# To remove debug tool interception
app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False
debug = DebugToolbarExtension(app)

COMPLIMENTS = ["cool", "clever", "tenacious", "awesome", "Pythonic"]


@app.route('/')
def index():
    """Return homepage."""

    return render_template("hello.html")


# SIMPLE VERSION OF FORM/GREET

@app.route('/form')
def show_form():
    """Show greeting form."""

    return render_template("form.html")


@app.route('/greet')
def offer_greeting():
    """Give player compliment."""

    player = request.args["person"]
    nice_thing = choice(COMPLIMENTS)

    return render_template("compliment.html", 
                           name=player, 
                           compliment=nice_thing)


# BETTER VERSION OF FORM/GREET    

@app.route('/form-2')
def show_better_form():
    """Show better greeting form."""

    return render_template("form-2.html")


@app.route('/greet-2')
def offer_better_greeting():
    """Give player optional compliments."""

    player = request.args["person"]

    # if they didn't tick box, `wants_compliments` won't be
    # in query args -- so let's use safe `.get()` method of
    # dict-like things
    wants = request.args.get("wants_compliments")

    nice_things = sample(COMPLIMENTS, 3) if wants else []

    return render_template("compliments.html",
                           compliments=nice_things, 
                           name=player)


@app.route("/mypage")
def my_page():
    """Show mypage, an example of template inheritance"""

    return render_template("mypage.html")





# -----------------------------------------NOTES-------------------------------------- 

# How can templates help?
# * Produce HTML
# * Allows your responses to be dynamically created
# * can use variables passed from your views

# for debugging
# import code; code.interact(local=dict(globals(), **locals()))

# Jinja
# Jinja is a popular template system for Python, used by Flask.

# There are many template systems for Python. Jinja is a particularly popular one. Django has its own template system, which served as an inspiration for Jinja.

# Templates Directory
# Your templates directory lives under your project directory. Flask knows to look for them there.

# my-project-directory/
#   venv/
#   app.py
#   templates/
#     hello.html
# Our Template
# demo/templates/hello.html
# <!DOCTYPE html>
# <html>
# <head>
#   <title>This is the hello page</title>
# </head>
# <body>
#   <h1>HELLO!</h1>
# </body>
# </html>
# Rendering a Template
# @app.route('/')
# def index():
#     """Return homepage."""

#     return render_template("hello.html")
# Will find hello.html in templates/ automatically.

# Flask Debug Toolbar
# Ultra-useful add-on for Flask that shows, in browser, details about app.

# Install add-on product:

# (venv) $ pip3 install flask-debugtoolbar
# Add the following to your Flask app.py:

# from flask import Flask, request, render_template
# from flask_debugtoolbar import DebugToolbarExtension

# app = Flask(__name__)
# app.config['SECRET_KEY'] = "oh-so-secret"

# debug = DebugToolbarExtension(app)

# ... # rest of file continues
# SECRET_KEY

# For now, that secret key doesn???t really have to be something secret (it???s fine to check this file into your GitHub, and you can use any string for the SECRET_KEY.

# Later, when we talk about security & deployment, we???ll talk about when and how to actually keep this secret.

# Using The Toolbar
# Request Vars
# Explore what Flask got in request from browser
# HTTP Headers
# Can be useful to explore all headers your browser sent
# Templates
# What templates were used, and what was passed to them?
# Route List
# What are all routes your app defines?

# Dynamic Templates
# Jinja will replace things like {{ msg }} with value of msg passed when rendering:

# templates/lucky.html
# <h1>Hi!</h1>

# <p>Lucky number: {{ lucky_num }}</p>
 
# app.py
# @app.route("/lucky")
# def show_lucky_num():
#     "Example of simple dynamic template"

#     num = randint(1, 100)

#     return render_template("lucky.html",
#                           lucky_num=num)
# Example: Greeting
# Let???s make a form that gathers a user???s name.

# On form submission, it should use that name & compliment the user.

# Our Form
# demo/templates/form.html
# <!DOCTYPE html>
# <html>
# <body>
#   <h1>Hi There!</h1>
#   <form action="/greet">
#     <p>What's your name?  <input name="person"></p>
#     <button>Go!</button>
#   </form>
# </body>
# </html>
# Our Template
# demo/templates/compliment.html
# <!DOCTYPE html>
# <html>
# <body>
#   <p>Hi {{ name }}! You're so {{ compliment }}!</p>
# </body>
# </html>
# Our Route
# @app.route('/greet')
# def offer_greeting():
#     """Give player compliment."""

#     player = request.args["person"]
#     nice_thing = choice(COMPLIMENTS)

#     return render_template("compliment.html", 
#                            name=player, 
#                            compliment=nice_thing)

# Example 2: Better Greeting!
# Let???s improve this:

# We???ll ask the user if they want compliments & only show if so

# We???ll show a list of 3 random compliments, like this:

# You're so:
# <ul>
#   <li>clever</li>
#   <li>tenacious</li>
#   <li>smart</li>
# </ul>
# Our Form
# demo/templates/form-2.html
# <!DOCTYPE html>
# <html>
# <body>
#   <h1>Better Hi There!</h1>
#   <form action="/greet-2">
#     <p>What's your name? <input name="person"></p>
#     <p>Want compliments?
#       <input type="checkbox" name="wants_compliments">
#     </p>  
#     <button>Go!</button>
#   </form>
# </body>
# </html>

# Our Route
# @app.route('/greet-2')
# def offer_better_greeting():
#     """Give player optional compliments."""

#     player = request.args["person"]

#     # if they didn't tick box, `wants_compliments` won't be
#     # in query args -- so let's use safe `.get()` method of
#     # dict-like things
#     wants = request.args.get("wants_compliments")

#     nice_things = sample(COMPLIMENTS, 3) if wants else []

#     return render_template("compliments.html",
#                            compliments=nice_things, 
#                            name=player)

# Example: Greeting
# Let???s make a form that gathers a user???s name.

# On form submission, it should use that name & compliment the user.

# Our Form
# demo/templates/form.html
# <!DOCTYPE html>
# <html>
# <body>
#   <h1>Hi There!</h1>
#   <form action="/greet">
#     <p>What's your name?  <input name="person"></p>
#     <button>Go!</button>
#   </form>
# </body>
# </html>
# Our Template
# demo/templates/compliment.html
# <!DOCTYPE html>
# <html>
# <body>
#   <p>Hi {{ name }}! You're so {{ compliment }}!</p>
# </body>
# </html>
# Our Route
# @app.route('/greet')
# def offer_greeting():
#     """Give player compliment."""

#     player = request.args["person"]
#     nice_thing = choice(COMPLIMENTS)

#     return render_template("compliment.html", 
#                            name=player, 
#                            compliment=nice_thing)

# Example 2: Better Greeting!
# Let???s improve this:

# We???ll ask the user if they want compliments & only show if so

# We???ll show a list of 3 random compliments, like this:

# You're so:
# <ul>
#   <li>clever</li>
#   <li>tenacious</li>
#   <li>smart</li>
# </ul>
# Our Form
# demo/templates/form-2.html
# <!DOCTYPE html>
# <html>
# <body>
#   <h1>Better Hi There!</h1>
#   <form action="/greet-2">
#     <p>What's your name? <input name="person"></p>
#     <p>Want compliments?
#       <input type="checkbox" name="wants_compliments">
#     </p>  
#     <button>Go!</button>
#   </form>
# </body>
# </html>
# Our Route
# @app.route('/greet-2')
# def offer_better_greeting():
#     """Give player optional compliments."""

#     player = request.args["person"]

#     # if they didn't tick box, `wants_compliments` won't be
#     # in query args -- so let's use safe `.get()` method of
#     # dict-like things
#     wants = request.args.get("wants_compliments")

#     nice_things = sample(COMPLIMENTS, 3) if wants else []

#     return render_template("compliments.html",
#                            compliments=nice_things, 
#                            name=player)
# Conditionals in Jinja
# {% if CONDITION_EXPR %} ... {% endif %}

# {% if compliments %}
#   You're so:
#   ...
# {% endif %}