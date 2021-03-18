# Read: 06 - JS Object Literals; The DOM

## Content

- [Understanding The Problem Domain Is The Hardest Part Of Programming](#understanding-the-problem-domain-is-the-hardest-part-of-programming)
    - [TLDR](#tldr)
- [JavaScript](#javascript)
  - [Object Literals](#object-literals)
  - [Document Object Model](#document-object-model)
- [Reference](#reference)

***

## Understanding The Problem Domain Is The Hardest Part Of Programming

### TLDR

Programmers often lack the skills needed to comprehend problem domains. If you understand the problem domain, programming is easy; if you don't, it's hard. Talking to consumers or business people who are familiar with the problem domains is a waste of time. Eliminate cases and emphasis a specific aspect of the issue, or improve your comprehension of problem domains, he says. It may be time-consuming, but it's much more efficient than hammering out a spec in a couple of hours. Defterios, a self-confessed perfectionist, says.

[Back to Content](#content)

The content below is an excerpt from the article. [1](#001)

What is the hardest thing about writing code?

There are many common answers to this question:
- Learning a new technology
- Naming things
- Testing your code
- Debugging
- Fixing bugs
- Making software maintainable

However, as I focus on my programming experience and speak with several young programmers studying the trade, I've discovered the single most difficult thing to overcome.

Simple functionality that is easy to describe and, most importantly, understand. Since it was too simple to comprehend, the emphasis was shifted away from the issue domain and toward the technology. Since I used this same application to teach a multitude of various innovations, it acted as a reference issue domain that didn't need relearning. It also called for the comparison and contrast of various technologies.

Putting together a jigsaw puzzle is similar to writing code. Many problem domains resemble a puzzle with a hazy or non-existent image. The entire world is a jumbled mess. Many of the problem domains we encounter as programmers are difficult to comprehend and appear in a variety of ways based on perspective.

As programmers, we are often given inadequate information about the problem domain, and therefore lack the skills needed to comprehend it. We wrote code with the aim of constructing components that we had removed from the "bigger picture."

If you understand the problem domain, programming is easy. I was given a pixel-perfect specification for a printer tab control and told precisely how it should work. Writing the coding for a function was a breeze. I've spent days trying to introduce a function only to have to go back and speak to a product owner about how and why anything can work the way it does. It's not like being on an Agile team, where you have to describe the issue in depth to the product owner before writing code. It may be time-consuming, but it's much more efficient than hammering out a spec in a couple of hours. It also gives you a good picture of the problem. 

There are two things you can do to make learning the problem domain better if it is the most difficult aspect of programming. Eliminate cases and emphasis a specific aspect of the issue. Improve your comprehension of problem domains. Doing something over is much more costly and time-intensive than doing them correctly the first time. We are developers have a tendency to believe that speaking with consumers or business people who are familiar with the problem domains is a waste of time. It's difficult to suppress the impulse to "not spend any more time chatting" and ensuring that you thoroughly comprehend a dilemma before trying to address it with coding.

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
You will be called function in html

```html
<button onclick="addSeries()">Enter Your Series</button>
```

This work is old and could be strengthened by using some negatives in data entry and output, such as data entry from a shape, a textbox, and so on.

[Back to Content](#content)

## Reference

#### 001

Sonmez, J. (2013). Understanding The Problem Domain Is The Hardest Part Of Programming. [online] Simple Programmer. [Available at:](https://simpleprogrammer.com/understanding-the-problem-domain-is-the-hardest-part-of-programming) [Accessed 18 Mar. 2021].

[Back to Content](#content)
***

[⇐ Home Page](../README.md)