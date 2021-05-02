# Readings: NODE.JS

## Content
- [NODE.JS](#nodejs)
- [Reference](#reference)

***

# NODE.JS

What Is Node.js and How Does It Work? There are several meanings available on the internet. Let's take a peek at a few of the most well-known ones. The Node.js runtime is based on Chrome's V8 JavaScript engine.

Node.js is a non-blocking, asynchronous I/O runtime built on the V8 JavaScript engine and the libuv library from Google. “Event-based,” “non-blocking,” and “asynchronous I/O” — that's a lot to take in at once. So, let's take a different tack and start with the other information mentioned in both descriptions: the V8 JavaScript engine.

The V8 JavaScript Engine in Google Chrome is used to build Node. Google Chrome and other Chromium-based web browsers, such as Brave, Opera, and Vivaldi, use the V8 engine, which is an open-source JavaScript engine. It was built with speed in mind, and it's in charge of compiling JavaScript into native machine code so your computer can run.

What Is Node.js and How Do I Install It? We'll install Node and write a couple of basic programs in the next segment. We'll also take a look at npm, a package manager used with Node.

Version Manager vs. Node Binaries Many websites will advise you to download the Node binaries for your device from the official Node download page. If that works, I recommend that you instead use a version manager. This app helps you to load different iterations of Node and switch between them at your leisure. Using a version manager has a number of benefits.

What Is Node.js Used For? Now that we know what Node and npm are and how to install them, we can move on to the first of their several applications: downloading (via npm) and running (via Node) various build tools aimed at automating the development of modern JavaScript applications.

Are There Any Downsides? Since Node operates in a single thread, it has certain restrictions. Blocking I/O calls, for example, should be avoided, CPU-intensive operations should be delegated to a worker thread, and errors should always be addressed properly to prevent the machine crashing.

What Kind of Apps Is Node.js Suited To? Node is especially well suited to creating applications that involve real-time engagement or teamwork, such as chat sites or software like CodeShare, which allows you to watch a document being edited live by another person. It's also a good match for creating APIs that handle a lot of I/O-driven requests or for sites that stream data, because Node allows you to process files when they're still being uploaded. If you're interested in learning more about Node's real-time capabilities, check out our tutorial on Creating a Real-time Chat App.

What Are the Advantages of Node.js? Aside from speed and scalability, using JavaScript on a web server — as well as in the browser — has the added benefit of eliminating the need for the brain to alter modes. You can do it in the same language, which makes you more creative as a developer (and hopefully, happier).

Node.js is a non-blocking, asynchronous I/O runtime built on the V8 JavaScript engine and the libuv library from Google.

[Back to Content](#content)

***

# Reference

### 1
Hibbard, J. (2020). An Introduction to Node.js. [online] Sitepoint.com. Available at: https://www.sitepoint.com/an-introduction-to-node-js/ [Accessed 2 May 2021].

### 2
Code Fellows. (2018). 6 Reasons for Pair Programming. [online] Available at: https://www.codefellows.org/blog/6-reasons-for-pair-programming/ [Accessed 2 May 2021].

[Back to Content](#content)

[⇐ Home Page](../../README.md)
