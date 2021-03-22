# Read: 08 - More CSS Layout

## Content
- [HTML & CSS](#html--css)
  - [Layout](#layout)
- [Reference](#reference)
***

# HTML & CSS

## Layout

We talked about Layout in previous reading note Read: 04 - HTML Links, CSS Layout, JS Functions [Link](../class10/README.md#layout).

The layout is one of the important things when you build a website, any layout deposit in UI/UX, UI is made up of all the elements that help someone to communicate with a product or service at the most simple level. The customer experience, on the other hand, is what the consumer using the product or service gets out of the whole thing.

To achieve the most benefit from UI/UX, You should know each most used element and how to use the elements within the web page.

Key Concepts in Positioning Elements, Block-level elements, Inline elements, We talked previously about these elements Read: 01 - Introductory HTML and JavaScript [Link](../class07/README.md#structure)

> By default, inline elements do not force a new line to begin in the document flow. Block elements, on the other hand, typically cause a line break to occur (although, as usual, this can be changed using CSS). [001](#001)

You can manipulate, control and transform elements just as you wish, example:

style.css
```css
* {
  padding: 0;
  margin: 0;
  text-align: center;
}

nav {
  background-color: black;
  height: 40px;
}

ul {
  list-style: none;
  padding-top: 10px;
}

li {
  display: inline;
  padding: 10px;
}

a {
  color: white;
  text-decoration: none;
}

a:hover {
  color: red;
}
```

index.html
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Layout</title>
  <link rel="stylesheet" href="./css/style.css">
</head>

<body>
  <header>
    <h1>Layout</h1>
  </header>
  <nav>
    <ul>
      <li><a href="">Home</a></li>
      <li><a href="">About me</a></li>
      <li><a href="">Work</a></li>
      <li><a href="">Contact us</a></li>
    </ul>
  </nav>
</body>

</html>
```

You can control the position of the item, Overlapping Elements When you use relative, fixed, or absolute positioning, boxes can overlap, When designing the layout, keep in mind the various device sizes, such as smartphone, tablet, and screen resolution.

[Back to Content](#content)

# Reference 

### 001

Mozilla.org. (2021). Inline elements - HTML: HyperText Markup Language | MDN. [online] Available at: [Link](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#conceptual_differences) [Accessed 22 Mar. 2021].



***

[⇐ Home Page](../README.md)