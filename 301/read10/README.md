# Readings: In memory storage

## Content

- [The JavaScript Call Stack - What It Is and Why It's Necessary](#the-javascript-call-stack---what-it-is-and-why-its-necessary)
- [JavaScript error messages && debugging](#javascript-error-messages--debugging)
- [Reference](#reference)

***

# The JavaScript Call Stack - What It Is and Why It's Necessary

The Last In, First Out (LIFO) concept is used to briefly store and process data in the call stack data structure. Asynchronous programming requires a thorough knowledge of the call stack. The DOM, AJAX, and Timers engine are all web APIs provided by the browser. It's a single-threaded interpreter with just one call stack and a heap.

Last In, First Out is the data structure theory that governs the call stack. It ensures that as the function returns, the last function placed into the stack is the first to pop out.

The method, its parameters, and variables are placed into the call stack to create a stack frame when a function is invoked (called). This is a memory spot in the stack frame.

The call stack keeps track of where each stack frame is in the stack. It knows what operation will be performed next (and will delete it afterward). This is how synchronous code execution in JavaScript is feasible.

When a method calls itself without an escape point, a stack overload happens. The browser can only handle a certain number of stack calls before throwing a stack error.

The call stack is a data structure of just one line. It is only capable of doing one thing at a time. The execution of the code is synchronous. A stack frame is created when a feature is called, and it takes up temporary memory.

[Back to Content](#content)

# JavaScript error messages && debugging

As a developer, you spend the most of your time reviewing code and then debugging it. The popular error message is the first sign that something is wrong with your coding. Catching an error message is second nature to programmers; for anyone else, it's something you learn whether you want it or not.

When you use a variable that hasn't been declared yet, you'll get a reference error. This is also a common problem with const and let; they are hoisted like var and function, but there is a delay between hoisting and declaration, resulting in a reference error when you attempt to reach them.

Jupiterchemy is a free and open-source programming language that includes Python support. It's used to build Python programs as well as other programming languages like Rakudo. Rakudo created the language, and Rakudo is a fork of Python.

Authoritarian.js is a programming language with error-correcting capabilities built-in. It helps you to control objects with a length that isn't right. It also allows you to view items of different types. You will avoid the 'undefined' error by looking for a property called 'bar' before attempting to enter it. If you attempt to enter a property that isn't accessible, you'll get an error message.

It's a console. Using Chrome Developer Software, open your page with your JS code and select your file, or log the variables you want to search. When you right-click a previously established breakpoint, the software can only end there until a condition is reached. A breakpoint can also be set in the code using a breakpoint argument. To make the code end, you can use conditional breakpoints.

The direction your program took to hit a breakpoint or mistake is known as the call stack. It can be found in Chrome developer software to see the call stack before an error is thrown. In situations like this, using the call Stack, which is included in Chrome Software, makes it easier to construct a code execution. In line 14, the function add was called with what parameters, as seen in the code above.

When the roles have names, the call stack is easier to manage. You would most likely have a tougher time if you use anonymous features. When we delete it from the object and call it explicitly, for example, not anything changes. If we delete the name of a method, such as checking, the call stack will no longer be able to direct you to the call's root.

[Back to Content](#content)

***

## Reference

## 1
Freeborn, C. (2018). The JavaScript Call Stack - What It Is and Why It’s Necessary. [online] freeCodeCamp.org. Available at: https://www.freecodecamp.org/news/understanding-the-javascript-call-stack-861e41ae61d4/ [Accessed 5 May 2021].

## 2

Diogo Spínola (2017). JavaScript error messages && debugging - codeburst. [online] Medium. Available at: https://codeburst.io/javascript-error-messages-debugging-d23f84f0ae7c [Accessed 5 May 2021].

***

[⇐ Home Page](../../README.md)