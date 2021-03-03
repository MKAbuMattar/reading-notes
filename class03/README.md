# HTML & CSS, Chapter 17

each HTML page has a stretcher Layout, but now HTML5 has a new essay  Layout to understand, in old HTML we usually used `dev` for the stretcher layout page, but the new stretcher has simple and easier.
new layout example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    <header>
        <nav></nav>
    </header>
    <main>
        <section></section>
        <article></article>
    </main>
    <footer></footer>
</body>
</html>
```
new stretcher better for dev and browser for displaying your website.
each element has a meaning, each semantic element, and has a place in the layout for using it.

# HTML & CSS, Chapter 8
HTML has a lot of evolution as an example:
for describing an HTML for the browser we used doctypes.
HTML 4
```html
<!DOCTYPE html PUBLIC   "-//W3C//DTD HTML 4.01 Transitional//EN"   "http://www.w3.org/TR/html4/loose.dtd">
```
HTML 5
```html
<!DOCTYPE html>
```
easier for devs to understand and browser for display new search engine for archive webpage.
In large work, you need for small comment or you and your colleagues to understand your code or when a section start or ends.
example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<!--bady start-->
<body>
    
</body>
</html>
```
In HTML you have two types of elements to identify your element
`id`, `class`. id used to uniquely identify, and class used to uniquely identify one element or several elements has the same purpose.
all elements are one of two types, block elements or inline elements, if you want to attach another webpage you need to use an iframe tag, each page has a piece of information and details for search engine and browser to understand how to display your layout used `meta` each metadata have one attribute like description, keywords, author ...