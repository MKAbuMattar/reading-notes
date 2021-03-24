# Read: 10 - JS Debugging

## Content

- [JavaScript](#javascript)
  - [Error Handling & Debugging](#error-handling--debugging)
- [Reference](#reference)

***

## JavaScript

### Error Handling & Debugging

Expect to make mistakes when writing JavaScript. It's similar to problem-solving when it comes to programming, You are given a puzzle to solve, and you must also generate the instructions that will enable the machine to solve it. in addition,  Statements in JavaScript code are separated by the semicolon (;), In JavaScript, the order of execution is essential. The device will fail if the communication is done wrongly or out of order.

Order of execution in JavaScript is dependent on the following components working together to pass and order information. [001](#001)

- The Callstack
- The Event Loop
- The Task Queue
- WebAPIs/External Resources

Execution context & Hoisting

- Global execution context (GEC): This is the normal execution context for JS code when it first loads in the window. The global execution background executes all code that is not contained within any method or entity. Since the JS engine is single-threaded, there can only be one global setting for JS code execution.
- Functional execution context (FEC): The context provided by the JS engine whenever it detects a function call is known as the functional execution context. Each method executes in its own context. It's possible to get more than one. The functional execution context has access to all of the code in the global execution context, but not the other way around. If the JS engine encounters a function call when running the global execution context code, it generates a new functional execution context for that function. If the code is running in strict mode in the browser, the value of this is undefined; otherwise, it is a window object in the function execution sense.

Error items will assist you in finding the errors, and most browsers provide software to assist you in interpreting them.

[Back to Content](#content)

## Reference

### 001

Maki, M. (2017). A Brief Overview of Order of Execution in JavaScript. [online] Medium. Available at: [Link](https://medium.com/@marcellamaki/a-brief-overview-of-order-of-execution-in-javascript-e28744aa9479) [Accessed 24 Mar. 2021].

‌

[Back to Content](#content)

***

[⇐ Home Page](../README.md)