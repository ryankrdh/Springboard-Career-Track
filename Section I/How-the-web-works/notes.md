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
