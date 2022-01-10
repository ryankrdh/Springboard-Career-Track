from flask import Flask, request

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

@app.route('/search')
def search():
    term = request.args["term"]
    sort = request.args["sort"]
    return f"<h1>Search Results For: {term}</h1> <p>Sorting by: {sort}</p>"

# @app.route("/post", methods=["POST"])
# def post_demo():
#     return "YOU MADE A POST REQUEST!"

# @app.route("/post", methods=["GET"])
# def post_demo():
#     return "YOU MADE A GET REQUEST!"

@app.route('/add-comment')
def add_comment_form():
    return """
    <h1>Add Comment</h1>
    <form method="POST">
        <input type='text' placeholder='comment' name='comment'/>
        <input type='text' placeholder='username' name='username'/>
        <button>Submit</button>
    </form>
    """

@app.route('/add-comment', methods=["POST"])
def save_comment():
    comment = request.form["comment"]
    username = request.form["username"]
    print(request.form)
    return f"""
        <h1> SAVED YOUR COMMENT</h1>
        <ul>
            <li>Username: {username}</li>
            <li>Comment: {comment}</li>
        </ul>
    """

@app.route('/r/<subreddit>')
def shiw_subreddit(subreddit):
    return f"<h1>Browsing The {subreddit} Subreddit</h1>"

POSTS = {
    1: "I LIKE CHICKEN",
    2: "I hate mayo!",
    3: "Double rainbow",
    4: "oh noes"
}

# need to specify if its going to be integer or string
@app.route('/posts/<int:id>')
def find_post(id):
    # post = POSTS[id]
    post = POSTS.get(id, "Post not found")
    return f"<p>{post}</p>"