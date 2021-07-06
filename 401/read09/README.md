# Read: 09 - WRRC and Java

## Content

Review: High-level HTTP

HTTP Request Lifecycle

- Local Processing
- Resolve an IP
- Establish a TCP Connection
- Send an HTTP Request
- Tearing Down and Cleaning Up

Local Processing

Browser will then go through its own cache of recently accessed URLs, the operating system's cache of recent queries, router's cache, and DNS cache to extract the "scheme"/protocol, host, optional port number, resource path, and query strings that are given in the form.

Resolve an IP

If the cache lookup fails, the browser sends a UDP3 DNS request to its target DNS server. If a response isn't received, the request will be forwarded to another server. This is because the server looks for the address associated with the requested hostname and sends a response. If it doesn't arrive, the client has no idea how long it will take.

Establish a TCP Connection

Before the server can accept a three-way handshake, the client must first create a TCP connection. The server must be listening on a port and executing a passive open, after which the client can conduct an active open and the client-server connection will be recognized. This allows the receiver to restore the original order of received packets and the sender to restore the original order of sent packets.

Send an HTTP Request

A request is submitted, consisting of a "request line," a request header, and a body, and it passes through a routing mechanism.
The server receives the request, analyzes it, and locates the requested resource before returning an HTTP response.
The server generates a response and responds to the request.

Tearing Down and Cleaning Up

After receiving the response, the client sends a TCP FIN packet, to which the server answers with an ACK, and then sends its own FIN, to which the client responds with its own ACK signal. Then there will be a timeout. The four-way handshake is what it's called.
The browser begins to process the information it has received and then exits.

Way of performing HTTP requests in Java

The HttpUrlConnection class allows basic HTTP queries to be made without the use of any extra libraries, and the classes we require are included in the java.net package. Set the requestMethod property to one of the following values for all sorts of requests: GET, POST, HEAD, OPTIONS, PUT, DELETE, TRACE.

- Add Request Parameters
- Setting Request Headers
- Configuring Timeouts
- Handling Cookies
- Handling Redirects
- Reading the Response
- Reading the Response on Failed Requests
- Building the Full Response


Add Request Parameters

Set the doOutput attribute to true to add parameters to a request, then write a String of the type param1=valuem2=value to the HttpUrlConnection instance's OutputStream.

Setting Request Headers

To add headers to a request, use the setRequestProperty() function.
To get the value of a header field from a connection, use the getHeaderField() function.

Configuring Timeouts

The HttpUrlConnection class allows you to configure connect and read timeouts, which determine how long you have to wait for the server to establish a connection or for data to become available for reading. To set the timeout values, use the etConnectTimeout() and setReadTimeout() methods.

Handling Cookies

CookieManager and HttpCookie are two classes in the java.net package that read cookies from a response, add them to the cookie store, and ultimately add the cookies to the request.

Handling Redirects

Use the setInstanceFollowRedirects() function with the true or false parameter to enable or disable automatically following redirects for a given connection.
It is possible to turn on or off automatic redirection for all connections.

Reading the Response

Use the getResponseCode(), connect(), getInputStream(), or getOutputStream() methods to parse the HttpUrlConnection instance's InputStream, and then use the getResponseCode(), connect(), getInputStream(), or getOutputStream() methods to execute it.
The disconnect() function is used to terminate the connection.

Reading the Response on Failed Requests

Using HttpUrlConnection, consume the unsuccessful stream. getErrorStream().

Building the Full Response

Include the status of the response.
getHeaderFields returns the headers ().
Read the content of the answer and add it to the document.



***

[⇐ Home Page](../../README.md)