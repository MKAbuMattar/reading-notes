# Readings: CRUD

## Content

- [Which HTTP Status Code to Use for Every CRUD App](#which-http-status-code-to-use-for-every-crud-app)
- [Build A REST API With Node.js, Express, & MongoDB - Quick](#build-a-rest-api-with-nodejs-express--mongodb---quick)
- [Reference](#reference)

***

# Which HTTP Status Code to Use for Every CRUD App

When listening to our customers, the HTTP specification specifies a number of status codes that we can use. For a clean API interface, this guide takes you through the different CRUD operations and which status codes you can use.

## HTTP Status Codes

A status code is a number in an answer that is greater than 100 but less than 600. The status's class is determined by the first digit. The coding is for identification by a computer program. The term is intended to help humans comprehend what has occurred.

## Status Classes

### 100 - 199

These are status codes that provide information. They normally inform the client that the request's header has been received and that the server will attempt to fulfill a transmission query.

### 200 - 299

The customer receives a success code indicating that their submission has been approved. This does not imply that the request was effectively processed; rather, it means that it meets all of the validity criteria.

### 300 - 399

The customer is informed that the resource they are seeking is no longer accessible at the intended location.

### 400 - 499

That are the error codes for clients. They're all about invalid requests submitted to a server by a customer. There are many reasons for this, including timeouts, incorrect URLs, and insufficient authentication.

### 500 - 599

The server error codes are shown here. They frequently show issues with overburdened servers or servers behind proxies that are not reachable. Client queries that result in error exceptions are often closely linked to them.

### What is a status code 202?

The customer is informed that the request was legitimate, but that its processing would take some time. The URL to the completed resource should be included in the response body.

### What is a status code 308?

This instructs the client to access the resource using a different URL. It comes in handy because there are many endpoints for a single resource.

### What code would you use if an update didn’t return data to a client?

For the most part, 200 OK is the most suitable code. the number 204 No Content - For changes that don't return data to the client, this is the correct code. the number 202 Accepted - This code should be used if the upgrade is synchronous.

### What code would you use if a resource used to exist but no longer does?

The 404 error code means that the requested resource is not usable at this time. The 410 code indicates that a resource once existed but has since been permanently disabled.

### What is the ‘Forbidden’ status code?

Forbidden 403 The client has allowed or does not need to approve itself, but no licenses to use the resource have been granted.

[Back to Content](#content)

# Build A REST API With Node.js, Express, & MongoDB - Quick

### Why do we need to pull our MongoDB database string out of our server and put it into our .env?

Since we want to use networks other than our local host as we launch our program.

### What is middleware?

Middleware is a piece of code that runs after the request has been sent by the servers but before it is forwarded to the routes.

### What does `app.use(express.json())` do?

It enables our api to handle JSON as a body in HTTP methods.

### What does the `/:id` mean in a route?

This indicates the id is a parameter that can be used as `request.params.id` in requests.

### What is the difference beween PUT and PATCH?

PUT updates the whole resource, while PUT just updates what the user provides.

### How do you make a defalut value in a schema?

In order to create a default value in a Schema, all we need to do is assign it a key called default and a value of the same kind.

### What does a 500 error status code mean?

It means that our server has encountered an error that is unrelated to the user or client.

### What is the difference between a status 200 and a status 201?

The status code 200 indicates that all went well, while the status code 201 indicates that a resource was successfully created.

[Back to Content](#content)

***

## Reference

###1
Ploesser, K. (2019). Which HTTP Status Code to Use for Every CRUD App. [online] Which HTTP Status Code to Use for Every CRUD App | Moesif Blog. Available at: https://www.moesif.com/blog/technical/api-design/Which-HTTP-Status-Code-To-Use-For-Every-CRUD-App/ [Accessed 18 May 2021].

###2
Web Dev Simplified (2019). Build A REST API With Node.js, Express, & MongoDB - Quick. YouTube. Available at: https://www.youtube.com/watch?v=fgTGADljAeg&t=12s&ab_channel=WebDevSimplified [Accessed 18 May 2021].

***

[⇐ Home Page](../../README.md)
