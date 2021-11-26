Intro
Goals
Describe what AJAX is
Compare AJAX requests to non-AJAX requests
Make GET and POST AJAX requests with axios
Use async / await to manage asynchronous code with axios
Describe what JSON is
AJAX
Traditional Requests
Traditional browser requests happen in response to:

Entering a URL in the browser bar
Clicking on a link
Submitting a form
In all cases:

Browser makes request
Receives response
Replaces entire resource with result

AJAX
AJAX web request:

Made from JavaScript in browser
JavaScript makes request (GET, POST, or other)
You receive a response
Do whatever you want with result!
AJAX is a technique in Javascript for sending requests and receiving responses from a server without having to reload the browser page.

What Does AJAX stand for?

AJAX originally was an acronym for “Asynchronous Javascript and XML”. However many people don’t send XML over AJAX nowadays; it’s more common to send HTML or JSON. The technology is still the same, though, even if the data payload is commonly different. Ultimately, AJAX is a cooler sounding acronym than AJAJ or AJAH.

Why Use AJAX?
Don’t need to reload entire page if just 1 thing is changing
Interactive web sites
Fewer full page loads from server
Your JS can talk to other servers directly
Less info has to go across network
AJAX with Axios
You don’t have to use Axios for this

There is an old, clunky built-in tool: (XMLHttpRequest)

Or a newer-but-still-clunky built-in tool: (fetch)

Or lots of other libraries (including jQuery)

… but we’ll use axios for now! It’s featureful & popular
