# Read: 07 - HTML Tables; JS Constructor Functions

## Content

- [Domain Modelin](#domain-modelin)
- [HTML & CSS](#html--css)
  - [Tables](#tables)
- [JavaScript](#javascript)
  - [Functions, Methods, and Objects](#functions-methods-and-objects)
- [Reference](#reference)

***

## Domain Modelin

The content below is an excerpt from the article. [1](#001)

The method of developing a conceptual model in code for a particular problem is known as domain modeling. An object-oriented model is a type of entity that stores data in properties and encapsulates behaviors in procedures. A well-articulated domain model should check and affirm one's knowledge of a problem. It establishes a set of terms that can be used.

This is object-oriented programming in JavaScript at its most fundamental level.

1. The `new` keyword instantiates (i.e. creates) an object.
2. The constructor function initializes properties inside that object using the `this` variable.
3. The object is stored in a variable for later use.

Generate random numbers

You'll use the assistance of a random number generator to model the unpredictable nature of user behavior. Fortunately, the JavaScript standard library has a `Math.random()` function that can be used in this situation.

Integer Number

The `Math.floor()` function returns the largest integer less than or equal to a given number. [2](#002)

in this example, I'll build my game Dice Game

`index.html` HTML file

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/style.css">
  <title>Dice Game</title>
</head>
<body>
  <button onclick="playGame()">play</button>
  <p id="result"></p> 
  <script src="./js/app.js"></script>
</body>
</html>
```

`app.js` JavaScript file

```javascript
function getRandomNumber(minNumber, maxNumber) {
 return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
}

function rollDice() {
 return getRandomNumber(1, 6);
}

function playGame() {
 let player1 = rollDice();
 let player2 = rollDice();
 let result;

 if (player1 > player2) {
  result = 'player 1 won the round';
 } else if (player2 > player1) {
  result = 'player 2 won the round';
} else {
  result = "this round is tied";
}
console.log(result);

document.getElementById('result').innerHTML = result;

return result;
}
```

[Dice Game Live Demo](./demo1/index.html)

## HTML & CSS

### Tables

The contents of the `<table>` are written out row by row `<tr>`. Each cell of a table is represented using a `<td>` element. At the end of each cell, you use a closing tag to end the table. For more information on HTML5 table-building, see the HTML5 Table Builder. `<th>` is used just like the `<td>` element but its purpose is to represent a heading, Spanning Columns `colspan="2"`, Spanning Rows `rowspan="2"`

`<thead>` The headings of the table should sit inside the `<thead>` element. `<tbody>` The body should sit inside the `<tbody>` element. `<tfoot>` The footer belongs inside the
`<tfoot>` element.

## JavaScript

### Functions, Methods, and Objects

in a previous reading note [Read: 06 - JS Object Literals; The DOM](../class12/README.md#object-literals), we talk about objects, but in this reading, we'll more advanced we talk about Functions, Methods, and Objects

A function is a named piece of code. It can be given data to work with (in the form of parameters) and can also return data (the return value). All data is expressly passed to a function.

A method is a piece of code that is known by an object's name. It should operate on data contained within a class. An object on which a method is called is implicitly passed to it. A method is similar to a function in that it operates on data within the class.

## Reference

### 001

codefellows. “Codefellows/Domain_modeling.” GitHub, 2021, [Link](github.com/codefellows/domain_modeling#domain-modeling). Accessed 20 Mar. 2021.

### 002

Mozilla.org. (2021). Math.floor() - JavaScript | MDN. [online] [Available at:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) [Accessed 20 Mar. 2021].

[Back to Content](#content)

***

[⇐ Home Page](../README.md)