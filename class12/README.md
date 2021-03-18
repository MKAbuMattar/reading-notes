# Read: 06 - JS Object Literals; The DOM

## Content

- [JavaScript](#javascript)
  - [Object Literals](#object-literals)
  - [Document Object Model](#document-object-model)

***

## JavaScript

### Object Literals

A comma-separated array of name-value pairs enclosed in curly braces is a JavaScript object literal. Data is encapsulated by object literals, which wraps it in a neat box. This reduces the use of global variables, which can lead to issues when mixing code.

```javascript
let human = {
  firstName: 'Mohammad',
  lastName: 'Abu Mattar',
  age: 25,
  eyeColor: 'brouwn',
  hairColor: 'black'
};
```

```javascript
// Renting Cars
let renting = {
  name: 'MK | Cars Shop',
  car: 'BMW'
  carModel: ['M2 Competition', 'M3 F80', 'M3 3 EVO3', 'M3 e36', 'M3 e46', 'M3 e92', 'M4 F82', 'M5 F90 Competition'],
  carsInGarage: 100,
  rentalCar: 38,

  cheackAvailability: function(){
    return this.carsInGarage - this rentalCar;
  }
};
```

for access to object

```javascript
let shopName = renting.name;
let availableCar = renting.cheackAvailability();
```
[Back to Content](#content)

### Document Object Model

The Document Object Model (DOM) is a platform and language-agnostic interface that allows programs and scripts to dynamically access and update the text, configuration, and style of a document.

previous [lab work](https://github.com/MKAbuMattar/lab-06b-design-web-pages-with-css)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FunTime</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Stick&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
        crossorigin="anonymous" />
    <link rel="stylesheet" href="./assets/css/style.css">
</head>

<body>
  <header>
    <div class="hero">
        <h1>FunTime</h1>
        <h2>Series</h2>
    </div>
    <nav class="sticky">
        <ul>
            <li><a href="https://laithaloudat.github.io/Lab06a/">Movies</a></li>
            <li><a href="https://mkabumattar.github.io/lab-06b-design-web-pages-with-css/">Series</a></li>
            <li><a href="https://ahmadyounis97.github.io/fun-time2021/">Football World</a></li>
        </ul>
    </nav>
  </header>
  <main>
    <section class="user">
        <p id="user">Your Name:</p>
    </section>

    <section class="cards">
        <p>Your List of Series:</p>
        <button onclick="addSeries()">Enter Your Series</button>
        <div class="userSeries"></div>
    </section>
  </main>
  <footer>
    &copy; Mohammad Abu Mattar
  </footer>
  <script src="./assets/js/app.js"></script>
</body>

</html>
```

```css
* {
    font-family: 'Stick', sans-serif;
}

.hero {
    height: 50vh;
    text-align: center;
    margin: 0px auto;
    padding-top: 15%;
    background-color: rgba(38, 70, 83, 1);
}

.hero h1 {
    color: rgb(233, 196, 106);
    font-size: 5rem;
}

.hero h2 {
    color: rgba(233, 196, 106, 0.5);
    font-size: 2rem;
}

header>nav {
    background-color: rgba(38, 70, 83, 0.9);
    height: 45px;
}

header>nav>ul {
    list-style: none;
    margin: 0 auto;
    text-align: center;
    padding: 10px;
}

header>nav>ul>li {
    display: inline;
    margin: 20px;
}

header>nav>ul>li>a {
    color: rgba(231, 111, 81, 1);
    font-size: 1.2rem;
    text-decoration: none;
}

header>nav>ul>li>a:hover {
    color: rgba(231, 111, 81, 0.7);
}

.user {
    background-color: rgb(42, 157, 143);
    height: 150px;
    text-align: center;
    margin: 0 auto;
    padding-top: 10%;
    padding-bottom: 10%;
}

.user p {
    font-size: 3rem;
}

.cards {
    display: block;
    text-align: center;
    margin: 0 auto;
    padding-top: 2%;
    padding-bottom: 2%;
    background-color: rgb(233, 196, 106);
}

.cards>p {
    font-size: 2rem;
}

.cards>button {
    border: 0;
    padding: 10px;
    background-color: rgba(38, 70, 83, 1);
    color: white;
    cursor: pointer;
}

.cards>button:hover {
    border: 0;
    padding: 10px;
    background-color: white;
    color: rgba(38, 70, 83, 1);
}

.card {
    width: 200px;
    min-height: 400px;
    background-color: rgba(38, 70, 83, 1);
    margin: 0 auto;
    margin-top: 2%;
    margin-bottom: 2%;
    padding-bottom: 2%;
    color: white;
}

.card img {
    width: 100%;
    height: 60%;
}

.card .cardTitle {
    font-size: 1.6rem;
}

.card .cardDes {}


footer {
    text-align: center;
    margin: 0 auto;
    padding-top: 2%;
    padding-bottom: 2%;
    background-color: rgba(38, 70, 83, 1);
    color: white;
}
```

```javascript
var userName = prompt("Enter your name:");

while(!isNaN(userName))
{
    var userName = prompt("Enter your name:");
}

document.getElementById("user").innerHTML = "Your Name: " + userName;

function addSeries()
{

  var seriesT = prompt("Enter your Titel:");
  while(!isNaN(seriesT))
  {
      var seriesT = prompt("Enter your Titel:");
  }

  var seriesImg = prompt("Enter your " + seriesT + " image URL:");
  while(!isNaN(seriesImg))
  {
      var seriesImg = prompt("Enter your " + seriesT + " image URL:");
  }

  var seriesdes = prompt("Enter your " + seriesT + " description:");
  while(!isNaN(seriesdes))
  {
      var seriesdes = prompt("Enter your " + seriesT + " description:");
  }

  var x = document.getElementsByClassName("userSeries");

  x[0].innerHTML += '<div class="card"><img src="'+seriesImg+'" alt=""><p class="cardTitle">'+seriesT+'</p><p class="cardDes">'+seriesdes+'</p></div>';
}
```
> NOTE: This previous lab worked, but now you must adjust it to use `let` instead of `var`.

I got to the component via ID

```html
<p id="user">Your Name:</p>
```

```javascript
document.getElementById("user").innerHTML = "Your Name: " + userName;
```

When inserting the films, it reached the component in the form array by class

```html
<div class="userSeries"></div>
```

```javascript
var x = document.getElementsByClassName("userSeries");
```

And you entered the data as follows

```javascript
function addSeries()
{

  var seriesT = prompt("Enter your Titel:");
  while(!isNaN(seriesT))
  {
      var seriesT = prompt("Enter your Titel:");
  }

  var seriesImg = prompt("Enter your " + seriesT + " image URL:");
  while(!isNaN(seriesImg))
  {
      var seriesImg = prompt("Enter your " + seriesT + " image URL:");
  }

  var seriesdes = prompt("Enter your " + seriesT + " description:");
  while(!isNaN(seriesdes))
  {
      var seriesdes = prompt("Enter your " + seriesT + " description:");
  }

  var x = document.getElementsByClassName("userSeries");

  x[0].innerHTML += '<div class="card"><img src="'+seriesImg+'" alt=""><p class="cardTitle">'+seriesT+'</p><p class="cardDes">'+seriesdes+'</p></div>';
}
```
You will be called function html

```html
<button onclick="addSeries()">Enter Your Series</button>
```

This work is old and could be strengthened by using some negatives in data entry and output, such as data entry from a shape, a textbox, and so on.

[Back to Content](#content)

***

[⇐ Home Page](../README.md)