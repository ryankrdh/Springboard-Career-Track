An Introduction
What Happens When…
When I type http://site.com/some/page.html

into a browser, what really happens?

This is a common interview question for software engineers.

How the Web Works
The internet is complicated.

Really, really complicated.

Fortunately, to be a software developer, you only need to know a bit.

For people who want to work in “development operations,” or as a system administrator, it’s typical to have to learn more about the details here.

Networks
A network is a set of computers that can intercommunicate.

The internet is just a really, really big network.

The internet is made up of smaller, “local” networks.

Hostnames
We often talk to servers by “hostname” — site.com or computer-a.site.com.

That’s just a nickname for the server, though — and the same server can have many hostnames.

IP Addresses
On networks, computers have an “IP Address” — a unique address to find that computer on the network.

IP addresses look like 123.77.32.121, four numbers (0-255) connected by dots.

There are a lot of advanced edges here that make this more complicated, but most of these details aren’t important for software engineers:

there another whole way to specify networks, “IPv6”, that use a different numbering scheme.
some computers can have multiple IP addresses they can be reached by
under some circumstances, multiple computers can share an IP address and have this be handled by a special kind of router. If you’re interested in system administration details, you can learn about this by reading about “Network Address Translation”.

127.0.0.1
127.0.0.1 is special — it’s “this computer that you’re on”.

In addition to their IP address on the network, all computers can reach themselves at this address.

The name localhost always maps to 127.0.0.1.

URLs
http://site.com/some/page.html?x=1

turns into:

Protocol Hostname Port Resource Query
http site.com 80 /some/page.html ?x=1
Protocols
Protocol Hostname Port Resource Query
http site.com 80 /some/page.html ?x=1
“Protocols” are the conventions and ways of one thing talking to another.

http
Hypertext Transfer Protocol (standard web) (How browsers and servers communicate)
https
HTTP Secure (How browsers and servers communicate with encryption)
ftp
File transfer protocol (An older protocol for sending files over internet)
There are many others, but these are the common ones.

In this lecture, we’ll be focusing only on HTTP.

Hostname
Protocol Hostname Port Resource Query
http site.com 80 /some/page.html ?x=1
DNS (domain name service) turns this into an IP address

So site.com might resolve to 123.45.67.89

Port
Protocol Hostname Port Resource Query
http site.com 80 /some/page.html ?x=1
Every server has 65,535 unique “ports” you can talk to
Services tend to have a default port
For HTTP, is port 80
For HTTPS, is port 443
You don’t have to specify in URL unless you want a different port
To do: http://site.com:12345/some/page.html
Resource
Protocol Hostname Port Resource Query
http site.com 80 /some/page.html ?x=1
This always talks to some “web server” program on the server
For some servers, may just have them read an actual file on disk: /some/page.html
For many servers, “dynamically generates” a page

Query String
Protocol Hostname Port Resource Query
http site.com 80 /some/page.html ?x=1
This provides “extra information” — search terms, info from forms, etc
The server is provided this info; might use to change page
Sometimes, JavaScript will use this information in addition/instead
Multiple arguments are separated by &: ?x=1&y=2
Argument can be given several times: ?x=1&x=2
So
http://site.com/some/page.html?x=1

means

Turn “site.com” into 123.45.67.89
Connect to 123.45.67.89
On port 80 (the default)
Using the HTTP protocol
Ask for /some/page.html
Pass along query string: x = 1

What’s in a Request?
Method (ex: GET)
HTTP protocol version (almost always 1.1)
Resource URL you want
Headers
Hostname you’re asking about
Date your browser thinks it is
Language your browser wants information in
Any cookies that server has sent
And more!
What’s in a Response
HTTP protocol version (almost always 1.1)
Response Status Code (200, 404, etc)
Headers
Content Type (typically text/html for web pages)
Date/time the server thinks it is
Any cookies server wants to set
Any caching information
And more!

**_ using Rested app for debugging _**
can make requests without using a browser.
only difference between the app and browser is what happens when we get the content back. The app doesn't show the content like the browser.

** OPENING YOUR OWN SERVER **

1st server tool method:
run this in the terminal:
$ python3 -m http.server

2nd server tool method:
using vs code live server

Methods: GET and POST
GET vs POST
GET: requests without side effects (ie, don’t change server data)
Typically, arguments are passed along in query string
If you know the arguments, you can change the URL
Entering-URL-in-browser, clicking links, and some form submissions
POST: requests with side effects (ie, change data on server)
Typically, arguments sent as body of the request (not in query string)
Some form submissions (but never entering-URL-in-browser or links)
Always do this if there’s a side-effect: sending mail, charge credit card, etc
“Are you sure you want to resubmit?”
