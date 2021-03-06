from flask import Flask, request, render_template, redirect
from flask import session, make_response

app = Flask(__name__)

# Flask uses a secret key to encrypt cookies used to connect
# the browser to the session--so if you want to use sessions,
# you have to have a secret key. If the public learns this
# value, they can forge session information--so for sites with
# security concerns, make sure this isn't checked into a
# public place like GitHub
app.config["SECRET_KEY"] = "4534gdghjk5d#$RGR^HDG"


@app.before_request
def print_cookies():
    """For every single request that comes in, print out request.cookies (printed to terminal)"""
    print("*********************")
    print(request.cookies)
    print("*********************")


@app.route("/")
def index():
    """Homepage."""
    return render_template("index.html")


@app.route("/demo")
def res_demo():
    content = "<h1>HELLO!!</h1>"
    res = make_response(content)
    res.set_cookie("jolly_rancher_flavor", "grape")
    return res


################################################################
# Routes that demonstrate cookies


@app.route("/form-cookie")
def show_form():
    """Show form that prompts for favorite color."""

    return render_template("form-cookie.html")


@app.route("/handle-form-cookie")
def handle_form():
    """Return form response; include cookie for browser."""

    fav_color = request.args["fav_color"]

    # Get HTML to send back. Normally, we'd return this, but
    # we need to do in pieces, so we can add a cookie first
    html = render_template("response-cookie.html", fav_color=fav_color)

    # In order to set a cookie from Flask, we need to deal
    # with the response a bit more directly than usual.
    # First, let's make a response obj from that HTML
    resp = make_response(html)

    # Let's add a cookie to our response. (There are lots of
    # other options here--see the Flask docs for how to set
    # cookie expiration, domain it should apply to, or path)
    resp.set_cookie("fav_color", fav_color)

    return resp


@app.route("/later-cookie")
def later():
    """An example page that can use that cookie."""

    fav_color = request.cookies.get("fav_color", "<unset>")

    return render_template("later-cookie.html", fav_color=fav_color)


################################################################
# Routes that demonstrate sessions


@app.route("/form-session")
def show_sessions_form():
    """Show form that prompts for nickname and lucky number."""

    return render_template("form-session.html")


@app.route("/handle-form-session")
def handle_sessions_form():
    """Return agreeable response and save to session."""

    # Get nickname and lucky number from form and put them
    # into the session--this will automatically trigger Flask's
    # session machinery, so it will now send out a cookie with
    # a session ID. Since we're using the standard
    # "store session data as a cookie", it will include that
    session["nickname"] = request.args["nickname"]
    session["lucky_number"] = int(request.args["lucky_number"])

    # Since we stored this in the session, we don't even need
    # to pass it to the template directly--jinja templates
    # automatically have access to session information
    return render_template("response-session.html")


@app.route("/later-session")
def session_later():
    """An example page that uses that session info."""

    # We could simply get the information from the session
    # directly in our template (as shown in the template
    # for handle_session_form), but we'll demonstrate here
    # that we can also get to the session information in
    # Flask code
    nickname = session.get("nickname", "<no nickname>")

    return render_template("later-session.html", nickname=nickname)


# **************************
# SECRET-INVITE DEMO ROUTES:
# **************************


@app.route("/login-form")
def show_login_form():
    """Show form that prompts users to enter the secret access code"""
    return render_template("login-form.html")


@app.route("/login")
def verify_secret_code():
    """
    Checks to see if the entered access code is correct

    - If the code is incorrect, redirect users back to the login form to try again

    - If the code is correct...
        - set session to indicate that user has access
        - redirect to the secret invite
    """
    SECRET = "chickenz_are_gr8"
    entered_code = request.args["secret_code"]
    if entered_code == SECRET:
        session["entered-pin"] = True
        return redirect("/secret-invite")
    else:
        return redirect("/login-form")


@app.route("/secret-invite")
def show_secret_invite():
    """
    Check to see if session contains 'entered-pin' (if user entered the correct secret code)

    - If it does, render the invite template

    - If session['entered-pin'] is missing or False, redirect user to the form to enter the secret code
    """
    if session.get("entered-pin", False):
        return render_template("invite.html")
    else:
        return redirect("/login-form")




# ------------------------------------------------------------------------------

# this will run before any other routes
# @app.before_request 

# ------------------------------------------------------------------------------

# Motivation
# Saving ???State???
# HTTP is what???s called a ???stateless??? protocol.

# On its own, it remembers nothing.

# It???s like a goldfish. Every time it circles around, what it sees is brand new.

# Some Ways To Save State
# Passing info in a query param / POST form hidden field
# /step-zero?fav-color=blue ??? /step-one?fav-color=blue ??? ???
# Keeping info in URL path
# /fav-color/blue/step-zero ??? /fav-color/blue/step-one ??? ???
# Using JS localStorage API
# Nice, but only JS can access this ??? you can???t get data on server
# Useful for single-page applications or heavily AJAX-driven apps
# Using cookies / sessions

# Cookies
# Flask???s session is powered by cookies; let???s start there

# Cookies Save ???State???
# Cookies are a way to store small bits of info on client (browser)

# What is a Cookie?
# Cookies are name/string-value pair stored by the client (browser).

# The server tells client to store these.

# The client sends cookies to the server with each request.


# Site	Cookie Name	Value
# rithmschool.com	number_visits	???10???
# rithmschool.com	customer_type	???Enterprise???
# localhost:5000	favorite_food	???taco???
# Cookies, A Conversation
# Browser: I???d like to get the resource /upcoming-events.
# Server: Here???s some HTML. Also, please remember this piece of information: favorite_food is "taco".
# Browser (stores this somewhere on the computer)
# Browser: I???d like to get the resource /event-detail. Also, you told me to remind you that favorite_food is "taco".
# Server: Here???s the HTML for that.
# Browser: I???d like to get the resource /calendar.jpg. Also, you told me to remind you that favorite_food is "taco".
# Seeing Cookies in Chrome
# Dev Tools ??? Application ??? Storage ??? Cookies

# Settings Cookies in Flask
# demo/app.py
# @app.route("/handle-form-cookie")
# def handle_form():
#     """Return form response; include cookie for browser."""

#     fav_color = request.args["fav_color"]

#     # Get HTML to send back. Normally, we'd return this, but
#     # we need to do in pieces, so we can add a cookie first
#     html = render_template("response-cookie.html", fav_color=fav_color)

#     # In order to set a cookie from Flask, we need to deal
#     # with the response a bit more directly than usual.
#     # First, let's make a response obj from that HTML
#     resp = make_response(html)

#     # Let's add a cookie to our response. (There are lots of
#     # other options here--see the Flask docs for how to set
#     # cookie expiration, domain it should apply to, or path)
#     resp.set_cookie("fav_color", fav_color)

#     return resp

# Reading Cookies in Flask
# demo/app.py
# @app.route("/later-cookie")
# def later():
#     """An example page that can use that cookie."""

#     fav_color = request.cookies.get("fav_color", "<unset>")

#     return render_template("later-cookie.html", fav_color=fav_color)
# Cookie Options
# Expiration: how long should the browser remember this?
# Can be set to a time; default is ???as long as web browser is running??? (session cookie)
# Domain: which domains should this cookie be sent to?
# Send only to books.site.com or everything at site.com? 
# HttpOnly - HTTP-only cookies aren???t accessible via any kind of J avaScript
# Useful for cookies that contain server-side information and don???t need to be available to JavaScript.

# Comparison of Types of Browser Storage
# LocalStorage
# Stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache
# Domain specific
# Storage limit is much larger than a cookie.
# SessionStorage
# Stores data only for until the browser or tab is closed.
# Storage limit is much larger than a cookie.
# Cookie
# Cookies can be made secure by setting the httpOnly flag as true for that cookie. This prevents client-side access to that cookie
# Sent from the browser to the server for every request to the same domain
# Set usually from server-side. Can we read by a server

# Using Session in Flask
# Import session from flask
# Set a secret_key
# from flask import Flask, session

# app = Flask(__name__)
# app.config["SECRET_KEY"] = "SHHHHHHHHHHH SEEKRIT"
# Now, in routes, you can treat session as a dictionary:

# @app.route('/some-route')
# def some_route():
#     """Set fav_number in session."""

#     session['fav_number'] = 42
#     return "Ok, I put that in the session."
# To get things out, treat it like a dictionary:

# from flask import session

# @app.route('/my-route')
# def my_route():
#     """Return information using fav_number from session."""

#     return f"Favorite number is {session['fav_number']}"
# It will stay the same kind of data (in this example, an integer)

# Are ???Sessions??? Related to ???Session Cookies????
# Not directly, no.

# They both just use the term ???session??? but to mean something different.

# By default: Flask sessions use browser-lifetime cookies (???session cookies???). So a Flask session lasts as long as your browser window.

# Yes, you can change that (read the Flask docs!)

# This distinction isn???t too important right now, but the terminology sometimes comes up in interviews, so be sure to review this material!

# Server-Side Sessions
# Some web frameworks store session data on the server instead
# Often, in a relational database
# Send a cookie with ???session key???, which tells server how to get the real data
# Useful when you have lots of session data, or for complex setups
# Flask can do this with the add-on Flask-Session

# app = Flask(__name__)

# @app.route("/")
# def home():
#     return "Hello, Flask!"

# @app.route("/hello/<name>")
# def hello_there(name):
#     now = datetime.now()
#     formatted_now = now.strftime("%A, %d %B, %Y at %X")

#     # Filter the name argument to letters only using regular expressions. URL arguments
#     # can contain arbitrary text, so we restrict to safe characters only.
#     match_object = re.match("[a-zA-Z]+", name)

#     if match_object:
#         clean_name = match_object.group(0)
#     else:
#         clean_name = "Friend"

#     content = "Hello there, " + clean_name + "! It's " + formatted_now
#     return content

# Hooking in WSGI Middleware
# To add WSGI middleware to your Flask application, wrap the application???s wsgi_app attribute. For example, to apply Werkzeug???s ProxyFix middleware for running behind Nginx:

# from werkzeug.middleware.proxy_fix import ProxyFix
# app.wsgi_app = ProxyFix(app.wsgi_app)
# Wrapping app.wsgi_app instead of app means that app still points at your Flask application, not at the middleware, so you can continue to use and configure app directly.

# Message Flashing
# Good applications and user interfaces are all about feedback. If the user does not get enough feedback they will probably end up hating the application. Flask provides a really simple way to give feedback to a user with the flashing system. The flashing system basically makes it possible to record a message at the end of a request and access it on the next (and only the next) request. This is usually combined with a layout template to expose the message.

# To flash a message use the flash() method, to get hold of the messages you can use get_flashed_messages() which is also available in the templates. See Message Flashing for a full example.