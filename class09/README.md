# Read: 03 - HTML Lists, CSS Boxes, JS Control Flow

## Content

- [HTML & CSS](#html--css)
    - [Lists](#lists)
    - [Boxes](#boxes)
- [JavaScript](#javascript)
    - [Basic JavaScript Instructions](#basic-javascript-instructions)
    - [Decisions and Loops](#decisions-and-loops)

***

## HTML & CSS

### Lists

There are three categories of lists in HTML that you will like to use while creating a website:

- Ordered lists `<ol>`
- Unordered lists `<ul>`
- Definition lists `<dl>`

There is an element sharing for the description objects by using Ordered and Unordered lists `<li>`.

By using Definition lists, the first element defines the Definition lists `<dl>`, the second element includes the definition `<dt>`, and the third element defines the element `<dd>`.

Examples:

Ordered lists:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Lists</title>
</head>

<body>
    <ol>
        <li>Ordered Lists Item 1</li>
        <li>Ordered Lists Item 2</li>
        <li>Ordered Lists Item 3</li>
    </ol>
</body>

</html>
```

Unordered lists:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Lists</title>
</head>

<body>
    <ul>
        <li>Unordered Lists Item 1</li>
        <li>Unordered Lists Item 2</li>
        <li>Unordered Lists Item 3</li>
    </ul>
</body>

</html>
```

Definition lists:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Lists</title>
</head>

<body>
    <dl>
        <dt>HTML & CSS</dt>
        <dd>Hypertext Markup Language (HTML)</dd>
        <dd>Cascading Style Sheets (CSS)</dd>
        <dt>JS</dt>
        <dd>JavaScript </dd>
    </dl>
</body>

</html>
```

You may use lists inside lists, as well as a specific list sort, example:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Lists</title>
</head>

<body>
    <ul>
        <li>Unordered Lists 1 Item 1</li>
        <li>
            <ol>
                <li>Ordered Lists 2 Item 2.1</li>
                <li>Ordered Lists 2 Item 2.2</li>
            </ol>
        </li>
        <li>Unordered Lists 1 Item 3</li>
    </ul>
</body>

</html>
```

When you use a list like that, it's referred to as nested lists.

[Back to Content](#content)

### Boxes

I discussed CSS and how you can manipulate elements in HTML in previous reading notes; in this subject [Read: 02 - HTML Text, CSS Introduction, and Basic JavaScript Instructions](../class08/README.md#introducing-css), we'll talk about boxes.

Imagine a secret box around each element to help you visualize width and height. However, if you are as lazy as I am, you can use this CSS code to create a box around an element.


CSS file `style.css`
```css
p {
    border: red 2px solid;
}
```

HTML file `index.html`
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Boxes</title>
    <link rel="stylesheet" href="/style.css">
</head>

<body>
    <p>Mohammad Abu mattar</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae voluptatibus, atque possimus quibusdam
        obcaecati doloremque a odio quis iusto ipsa saepe dolores corporis aut et quod eaque quo recusandae.</p>
</body>

</html>
```

Now you can see the Imagine secret box around the element, and you can see how to use width and height by naming the element and using the declaration example:

CSS file `style.css`
```css
p {
    width: 100px;
    height: 20px;
    background-color: #008080;
}
```

You will control the size of the element or other elements if you use this declaration, However, the size of the text within the HTML file must be set; the content inside the HTML file can have a fixed size. To address this issue, you should use another declaration.

CSS file `style.css`
```css
p {
    min-width: 100px;
    min-height: 20px;
    background-color: #008080;
}
```

OR

CSS file `style.css`
```css
p {
    min-width: 100px;
    min-height: 20px;
    max-width: 800px;
    max-height: 300px;
    background-color: #008080;
}
```

HTML file `index.html`
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Boxes</title>
    <link rel="stylesheet" href="/style.css">
</head>

<body>
    <p>Mohammad Abu mattar</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, quae voluptatibus, atque possimus quibusdam
        obcaecati doloremque a odio quis iusto ipsa saepe dolores corporis aut et quod eaque quo recusandae.</p>
</body>

</html>
```

When designing a website, you can get requests such as this feature must have a set size, but the issue is that the block of text or material is greater than the box's size, to solve this problem use declaration overflow:


CSS file `style.css`
```css
.description {
    width: 100px;
    height: 200px;
    background-color: #008080;
    overflow: scroll;
}
```

HTML file `index.html`
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Boxes</title>
    <link rel="stylesheet" href="/style.css">
</head>

<body>
    <p class="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis mollitia dolor maiores eaque totam
        facilis, fugiat, ad sequi est sunt sed velit nisi maxime similique aut quas porro voluptas molestiae?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, et incidunt aliquam optio nesciunt fuga
        tenetur assumenda soluta. Porro numquam dolor voluptate, officiis necessitatibus debitis! Obcaecati minus
        repellendus cum laborum?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione magnam possimus molestiae delectus ut,
        veritatis, provident voluptatem sequi alias esse obcaecati atque magni culpa? Fuga eaque dolorem odio. Nihil,
        nam!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum qui ipsa expedita facere dolores esse
        quo delectus doloremque. Minima autem ex temporibus at tenetur dolor esse nostrum quas culpa.
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur ducimus itaque molestias debitis explicabo
        natus similique officiis optio est. Recusandae quidem odio consectetur, itaque iste aliquid alias fugit soluta
        corporis?
    </p>
</body>

</html>
```

Other declaration box techniques include border, margin, and padding. We use the border to represent a concealed box around the element, but what about margin and padding? What the difference is between margin and padding?

A margin is the space surrounding an element, while padding is the space between an element and the material it contains.

You may use the border around items in a variety of designs, example: 

```css
p {
    border-style: dotted;
}
```

```css
p {
    border-style: dashed;
}
```

```css
p {
    border-style: solid;
}
```

```css
p {
    border-style: double;
}
```

```css
p {
    border-style: groove;
}
```

```css
p {
    border-style: ridge;
}
```

```css
p {
    border-style: inset;
}
```

```css
p {
    border-style: outset;
}
```

This HTML includes two distinct types of elements based on the form of show or view, as discussed in the previous read notes, [Read: 01 - Introductory HTML and JavaScript](../class07/README.md).

When you use an element but choose to display it differently than it was initially, you can do so by using declaration `display`.

```css
p {
    display: inline;
}
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Boxes</title>
    <link rel="stylesheet" href="/style.css">
</head>

<body>
    <p>Mohammad</p>
    <p>Khaled</p>
    <p>Abu</p>
    <p>Mattar</p>
</body>

</html>
```

When you want to cover an element, you have many options in CSS, visibility declaration `hidden`, `visibility`, What, therefore, is the contrast between them?

`hidden` and `visibility` The tag is not available, but room on the page has been set aside for it. The tag is rendered; however, it is not visible on the tab, However, if you don't want to take up space on the list, you can use to `display: none;`.

You may use the box-shadow property to create a drop shadow around a box, declaration `box-shadow`.

Border-radius is a property implemented in CSS3 that allows you to build rounded corners on any box. The radius's size in pixels is indicated by the weight, declaration `border-radius`.

[Back to Content](#content)

## JavaScript

### Basic JavaScript Instructions

We addressed an array in previous read notes [Read: 02 - HTML Text, CSS Introduction, and Basic JavaScript Instructions](../class08/README.md#basic-javascript-instruction).

We'll depend on the `let` variable keyword at this stage, Numbers, strings, and booleans are all distinct in JavaScript. Arrays is a unique kind of variable. It doesn't just store one value example:

```javascript
let color = new Array('red', 'black', 'blue');
```

for call black color in array you need know about index example:

```javascript
console.log("you choose color " + color[1]);
```

You may use array to change a value, such as converting blue to white:

```javascript
color[2] = 'white';
```

[Back to Content](#content)

### Decisions and Loops

If statement

If a given condition is valid, use if to define a block of code that will be executed. If the same condition is false, else specifies a block of code that will be executed. If the first condition is incorrect, you can use else if to evaluate a new condition.

```javascript
if (condition)
{
  //  block of code
}
else
{
  //  block of code
}
```

Example:

```javascript
if (age < 13)
{
  message = "You cannot register on this website.";
}
else
{
  message = "Welcome to this website.";
}
```


```javascript
if (condition1)
{
  //  block of code
}
else if (condition2)
{
  //  block of code
}
else
{
  //  block of code
}
```

Example:

```javascript
if (age < 13)
{
  message = "You cannot register on this website.";
}
else if (age > 130)
{
  message = "Are you certain? How are you still alive?";
}
else
{
  message = "Welcome to this website.";
}
```

Switch statement

The switch expression is only evaluated once, and its value is compared to the values in each instance.

```javascript
switch(expression)
{
  case a:
    // code block
    break;
  case b:
    // code block
    break;
  default:
    // code block
}
```

```javascript
switch (order)
{
  case 'coffee':
    text = "Thank you for taking the order; we will prepare a cup of coffee for you.";
    break;
  case 'tea':
    text = "Thank you for taking the order; we will prepare a cup of tea for you.";
    break;
  default:
    text = "Your order was not included in a list.";
}
```

Loops this to repeat a block of code.

Three types of looping:
-   `for`
-   `while`
-   `do while`

All loops have three characteristics:

-   `var i = 0;` initialization
-   `i < 10;` condition
-   `i++` update


[Back to Content](#content)

***

[⇐ Home Page](../README.md)