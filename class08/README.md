# Read: 02 - HTML Text, CSS Introduction, and Basic JavaScript Instructions

## Content

- [HTML](#html)
    - [Text](#text)
    - [Introducing CSS](#introducing-css)
- [JavaScript](javascript)
    - [Basic JavaScript Instruction](#basic-javascript-instruction)
    - [Decisions and Loops](#decisions-and-loops)

***

## HTML

### Text

The Text is the contents of what you are displaying or presenting on your website.

To show texts we have elements:

Headings

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

Paragraphs

```html
<p>Paragraph</p>
```

the definite between headings and paragraphs, it's important, the main title of webpage element `<h1>`, if the web has subheadings we use `<h2>` until you arrive `<h6>`, in HTML, you can be using some element according to its position in the text and the meaning it, like `<b>Bold</b>` for bold text, `<i>italic</i>` for italic text, `<sup>Superscript</sup>` for Superscript text, `<sub>Subscript</sub>` for Subscript text, `<p>Paragraph</p>` in this element, The size of the space or the number of lines does not count, to achieve that you need to use an extra element, this call white space, we have element work like the previous elements but have a definite meaning this `<strong></strong>`, `<em></em>`, `<strong>` work like `<b>`, but mean indicates that the knowledge stored inside it is important, `<em>` work like `<i>`, but mean indicates subtly shifting the context of a sentence by stressing it, if you When you're writing an article, book, or another kind of document, you can find yourself quoting from other sources in HTML you can use `<blockquote>` or `<q>` elements for Quotations. when writing a science or instructional post, abbreviations are often used and to simplify in your web page we use `<abbr>HTML</abbr>`, but to show the abbreviation u need to use the title attribute `<abbr title="Hypertext Markup Language">HTML</abbr>`, we have a lot of element in HTML for text `<cite>`, `<dfn>`, `<address>`, `<ins>` or `<del>`, `<s>` etc... but you don't see them constantly or some of these elements are no longer supported.


[Back to Content](#content)

### Introducing CSS

CSS helps you to construct rules that define how an element's content should be displayed, each element you can manipulate using CSS, width, height, font, size, style, outline, border, color, background-color etc... To get to the entity you want to change or manage, first call it by its element name, which is a selector, and then use the declaration example:

```css
h1 {
    color: #8BC34A;
    background-color: #616161;
    text-align: center;
    padding-top: 20%;
    padding-bottom: 20%;
}
```

you can call multiple-element example:

```css
main h1,
.text1,
.text2,
.text3,
.text4 {
    border: red 2px dashed;
}
```

CSS can be used in three different ways on your website:
- Inline
- Internal
- External

We use the external approach for best practices.

[Back to Content](#content)

***

## JavaScript

### Basic JavaScript Instruction

A script is a collection of one-by-one instructions that a program should obey. A statement is a name given to each particular instruction or step.

When working on a project, you can work with a community of developers, and when anything occurs on the web page or is introduced, other developers may be informed of how it works or whether to include or remove it. In these cases, we use a comment.

Online Comment
```javascript
// comment
```

Multiple-Lines
```javascript
/*
 Multiple-Lines
*/
```

variables in JS

```javascript
variable__keyword variable_name = variable_value;
```

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

Operators You'll assess a situation by contrasting one of the script's characteristics with the desired outcome.

-   is equal to`==`
-   is not equal to `!=`
-   strict equal to `===`
-   strict not equal to `!==`
-   greater than `>`
-   less than `<`
-   greater than or equal to `>`
-   less than or equal to `<`

```javascript
(score >= pass )
```

-   `()` enclosing brackets
-   `score` & `pass` operand
-   `>=` comparison operator

logical operators, You may use logical operators to compare the results of two or more true or false operators.

```javascript
( (5<2) && (2 >= 3) )
```
`( () && () )` do expression 1 and expression 2 both evaluate. * expression 3*

- `(5<2)` expression 1
- `&&` logical operatore
- `(2 >= 3) ` expression 2

Logical operators:

-   `&&` logical  and
-   `||` logical or
-   `!` logical not

[Back to Content](#content)

### Decisions and Loops

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