from flask import Flask

app = Flask(__name__)

@app.route('/')
def home_page():
    html = """
    <html>
        <body>
            <h1>Home Page</h1>
            <p>Welcome to my simple app</P>
            <a href='/hello'> Go to hello page</a>
        </body>
    </html>
    """
    return html

@app.route('/hello')
def say_hello():
    html = """
    <html>
        <body>
            <h1>Hello!</h1>
            <p>This is the hello page</P>
        </body>
    </html>
    """
    return html

@app.route('/goodbye')
def say_bye():
    return "Good bye!!!"