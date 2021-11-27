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

Getting Axios
Can easily include it using a CDN link:

<script src="https://unpkg.com/axios/dist/axios.js"></script>

Making a Simple Request
axios.get(url)

Make a GET request to that URL

Not What We Expected
let card = axios.get("/api/card");
console.log(card);
// "Promise {<pending>}"
What’s A Promise???
We’ll talk about it in more detail when we get to Node.
For now, all you need to know is that a promise is like a placeholder for a future value.
We want to wait for the promise to have that value before proceeding.
But we don’t know when the promise will receive its value!

Handling Asynchronous Code
Asynchronicity
AJAX requests are asynchronous

The axios.get() completes before the response is received
This means that if we want to use the data we get back from our AJAX requests, we need to wait until the response has been given to us
We’re going to use two newer keywords in JS to do this: async and await!
Await
Here’s what it looks like:

await axios.get('/api/card');

// returns response object, with `.data` as response body
The code is asynchronous, but it “waits” for the AJAX request to complete.

Async
When you are using Chrome DevTools in the console, you can just use await. This is great for testing, but normally you will use ‘await’ in the context of an ‘async’ function.

To use in a function, you must mark that function as async:

async function getCardInfo() {
let response = await axios.get("/api/card");
console.log("got", response);
return response.data;
}
When calling asnyc function, you should await it:

let card = await getCardInfo();
Callbacks Vs Async/Await
Callbacks are what we’ve used for event handlers and timers
But they’re tricky to nest or do other complex things
async/await makes it easier to handle chains of requests
Modern libraries like Axios return “promises”, which you await
