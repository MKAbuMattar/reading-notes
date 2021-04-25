# Readings: Introduction to React and Components 

***

# Content

- [React](#react)
  - [What is React?](#what-is-react?)
  - [Why React?](#why-react?)
  - [Hello World in React](#hello-world-in-react)
- [JavaScript Syntax Extension (JSX)](#javascript-syntax-extension-(jsx))
- [Reference](#reference)

***

# React

React is an open-source, front end, JavaScript JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components.

[Back to Content](#content)

## What is React?

React only for the application’s view layer. The view layer of the Model View Controller (MVC) architecture is in charge of how the app looks and sounds.

[Back to Content](#content)

## Why React?

Because of React's fast design of complex apps, improved usability, reusable modules, unidirectional data flow, small learning curve, and dedicated tools for quick debugging, its success has surpassed that of any other front-end development frameworks.

[Back to Content](#content)

## Hello World in React

The smallest React example looks like this:

```js
ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
```

> Note: If you want to see a word "**Hello, world!**" in more than one programming language, please visit my site [Hello Word](https://mkabumattar.github.io/Hello-World/)

[Back to Content](#content)

# JavaScript Syntax Extension (JSX)

JSX is a JavaScript syntax extension. It's a term that's used in React to explain how the user interface might appear. We can write HTML structures in the same file as JavaScript code by using JSX. Since complicated JavaScript DOM constructs are avoided, the code is simpler to grasp and debug.

Normal DOM

index.html
```html
<!DOCTYPE html>
<html>
  <body>

    <p id="demo"></p>
    <script src="./js/app.js"></script>
  </body>
</html> 
```

app.js
```js
const dom = document.getElementById('demo');

let textDOM = document.createElement(`p`);
textDOM.textContent = 'text From JS File use DOM';
dom.appendChild(textDOM);
```

JSX DOM

index.html
```html
<!DOCTYPE html>
<html>
  <body>

    <p id="root"></p>
  </body>
</html> 
```

index.js
```js
ReactDOM.render(
  <h1>text From React File use JSX</h1>,
  document.getElementById('root')
);
```

[Back to Content](#content)

***

## Reference

## 1
Reactjs.org. (2020). Tutorial: Intro to React – React. [online] Available at: https://reactjs.org/tutorial/tutorial.html [Accessed 25 Apr. 2021].

## 2
Reactjs.org. (2020). Hello World – React. [online] Available at: https://reactjs.org/docs/hello-world.html [Accessed 25 Apr. 2021].

## 3
Reactjs.org. (2020). Rendering Elements – React. [online] Available at: https://reactjs.org/docs/rendering-elements.html [Accessed 25 Apr. 2021].

## 4
Reactjs.org. (2020). Components and Props – React. [online] Available at: https://reactjs.org/docs/components-and-props.html [Accessed 25 Apr. 2021].

[Back to Content](#content)

[⇐ Home Page](../../README.md)
