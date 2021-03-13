# Pre-Work

***

# Read: 01 - Introductory HTML and JavaScript

## Content
- [GitHub](#github)
- [HTML](#html)
    - [HTML Introduction](#html-introduction)
    - [Structure](#structure)
    - [Extra Markup](#extra-markup)
    - [HTML5 Layout](#html5-layout)
    - [Process & Design](#process--design)
- [JavaScrpit](#javascrpit)
    - [JavaScrpit Introduction](#javascrpit-introduction)
    - [The ABC of Programming](#the-abc-of-programming)
- [Reference](#reference)

***

## GitHub

In the previous course 'Code 102 Reading Notes' we discuss how to create a Github account, create the first repository link for more info about [Read: 02b - Revisions and the Cloud](../class02/README02B), After creating the first repo. we use ACP command.

The real question WHY, WHAT, HOW we use it??

GitHub this a platform for sharing and cooperation between the developer, designer, software engineering, computer science, etc... for solving problems, create a new project, push technology and tools more further, like an open-source project, I had the project open, but now this close for [demo](https://mkabumattar.github.io/Encryption-Translator-Demo/).

how to use Github?

The first thing you need to configuration Git, we use this command:

```bash
git config --global user.name 'YOUR FULL NAME'
```

```bash
git config --global user.email 'YOUR EMAIL ADDRESS'
```

```bash
git config --global core.editor "code --wait"
```

After that, we use ACP command, but before that, we need to call the repo. we use the command 'clone':

```bash
git clone https://github.com/username/project-name.git
```

After we call repo, we need to use a text editor to edit the project, in preves, we discussed best a text editor [Read: 01 - The Coder's Computer](../class01/), in this example we use VSCode.

```bash
code .
```

After we finished editing the project we need to upload the project to Github in this case we need to use ACP command:

```bash
git add .
```

```bash
git commit -m "message"
```

```bash
git push origin main 
```

for the extra step, you can use the command to check if all files and directory upload:

```bash
git status
```

What do commands do?

`ACP`, `add` this command this will check all your changed and all modified file for add your version of code you need use
 `commit` It's wall create a new version of your modified code but still, and you can add a comment in your change or modified code, for easy to understand form deferent developer work in the same project or you in future. for that, you will use this command, `push` after all that still all your modified code in you're devise for publish your version, you will use this command.

[Back to Content](#content)

## HTML

### HTML Introduction

Hypertext Markup Language (HTML) is used to create web pages, first way to create a web page, you build websites using a tag, two define tags Self-closing and. non self-closing.

[Back to Content](#content)

### Structure

HTML as any markup language, have a basic structure.

```html
<html>

<head>
    <title>Document</title>
</head>

<body>
    <h1>Heading 1</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, aliquid autem, tempora deserunt, quis ut nesciunt
        voluptates id facilis consequuntur aspernatur eius labore assumenda? Quas error voluptatem sapiente debitis
        voluptate?</p>
    <h2>Heading 1</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ipsum reprehenderit ad expedita, mollitia
        exercitationem error ab quis iste omnis, enim pariatur itaque iure accusantium odio provident. Nesciunt,
        delectus beatae?</p>
</body>

</html>
```

`<html></html>` Definition to a browser that this page displays content in HTML.

`<head></head>` this element used for information about website and SEO, and how the web page will show, title icon, etc...

`<body></body>` everything you want to show inside your web page must be inside this element.

For most tags you can use something called an attribute, Attributes are used to provide additional information about an element's contents. They are made up of two parts: a name and a value, divided by an equals symbol, and appear on the element's opening tag. 

example:

```html
<p lang="en-us">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ipsum reprehenderit ad expedita, mollitia
        exercitationem error ab quis iste omnis, enim pariatur itaque iure accusantium odio provident. Nesciunt,
        delectus beatae?</p>
```

each attribute has an attribute name `lang` and attribute value `en-us`.

[Back to Content](#content)

### Extra Markup

Like any language in HTML have a lot of Evolution, started from how you define a web page, for example:

HTML5

```html
<!DOCTYPE html>
```
HTML 4

```html
<!DOCTYPE html PUBLIC   "-//W3C//DTD HTML 4.01 Transitional//EN"   "http://www.w3.org/TR/html4/loose.dtd">
```
Transitional XHTML 1.0

```html
<!DOCTYPE html PUBLIC   "-//W3C//DTD XHTML 1.0 Transitional//EN"   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```
Strict XHTML 1.0

```html
<!DOCTYPE html PUBLIC   "-//W3C//DTD XHTML 1.0 Strict//EN"   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```
XML Declaration
```xml
<?xml version="1.0" ?>
```

***

When working on a project, you can work with a community of developers, and when anything occurs on the web page or an element is introduced, other developers may be informed of how it works or whether to include or remove it. In these cases, we use a comments tag.

```html
<!-- -->
```

***

This language contains two different types of elements depending on the type of show or display:

-   Block Elements
-   Inline Elements

[Back to Content](#content)

### HTML5 Layout

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Document</title>
</head>

<body>
    <h1>Heading 1</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, aliquid autem, tempora deserunt, quis ut nesciunt
        voluptates id facilis consequuntur aspernatur eius labore assumenda? Quas error voluptatem sapiente debitis
        voluptate?</p>
    <h2>Heading 1</h2>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde ipsum reprehenderit ad expedita, mollitia
        exercitationem error ab quis iste omnis, enim pariatur itaque iure accusantium odio provident. Nesciunt,
        delectus beatae?</p>
</body>

</html>
```

in HTML5 this has new tags for different webpage like:

- `<header>`
- `<main>`
- `<nav>`
- `<article>`
- `<aside>`
- `<section>`
- `<footer>`

Called sectioning elements, It's necessary to remember that many HTML sectioning elements (such as key, nav, aside, etc.) automatically identify aria landmarks. Assistive technology consumers would be overwhelmed and less effective in viewing information and communicating with web pages if HTML sectioning features are used without recognizing the corresponding hallmark layout. [1](#001)

[Back to Content](#content)

### Process & Design

The most important thing is UI/UX, UI User Interface, UX User Experience, you need to know, who to target your users, what most function used? what less used? where users prefer to use websites on mobile or tablet or PC?


After we know the answer to these questions, we can develop the UI/UX and solve all problems, and create more functionality, to take advantage of everything you need from the UI/UX.

[Back to Content](#content)

## JavaScrpit

### JavaScrpit Introduction

In order to make websites more social, fun, and user-friendly, JavaScript (JS) can be used in browsers.

There are 4th define a way to use JS on a web page:

- Modify content
- Access content
- Program rules
- React to events

[Back to Content](#content)

### The ABC of Programming

ABC stands for:

(A) What is a script and how do I create one?

(B) How do computers fit in with the world around them?

(C) How do I write a script for a web page?

A script this a flow of stape and instructions a PC can be processing this command and it'll achieve a goal.

The first thing you need to know when the event starts and where it's will be affected, and how it started, and you'll realize each script have smaller steps when you write them all start in to define the goal, designing the script, and last step start write your code for each step to achieve your goal.

like each programming language, JS has an expression and its contact:

```javascript
variable variable-name = value ;
```

variable in JS `var` `let` `const`, and in value, you can use string, character, integer, or double, operators helped you to create a single value or multiple values, a have operators defined category, assignment, arithmetic, string, comparison, and logical, for creating each operator you need to something called arithmetic operations.

[Back to Content](#content)

## Reference

#### 001

W3.org. (2016). HTML Sectioning Elements: ARIA Landmarks Example. [online] Available at: [Link](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html) [Accessed 13 Mar. 2021].

[Back to Content](#content)

***

[⇐ Home Page](../README.md)