# Read: 04 - HTML Links, CSS Layout, JS Functions

## Content

- [HTML & CSS](#html--css)
    - [Links](#links)
    - [Layout](#layout)
- [JavaScript](#javascript)
    - [Functions, Methods, and Objects](#functions-methods-and-objects)
- [Pair Programming](#pair-programming)
    - [Greater efficiency](#greater-efficiency)
    - [Engaged collaboration](#engaged-collaboration)
    - [Learning from fellow students](#learning-from-fellow-students)
    - [Social skills](#social-skills)
    - [Job interview readiness](#job-interview-readiness)
    - [Work environment readiness](#work-environment-readiness)
- [Reference](#reference)

***

## HTML & CSS

### Links

Hyperlinks are a type of connection. Hyperlinks are HTML links. You can switch to another document by clicking on a page.

Example:

```html
<a href="https://mkabumattar.github.io/v1">My Portfolio<a>
```

`<a href="https://mkabumattar.github.io/v1">` all this opening link tag, `href="https://mkabumattar.github.io/v1"` This is the page the
link takes you to, `My Portfolio` This is the text the user clicks on, `<a>` Closing link tag.

The `<a>` element has an attribute called `href` that is used to build links. The href attribute's meaning is the URL of the website you want people to visit when they click on the tag.

A connection is a kind of hyperlink that connects the web pages to other websites; it's often used in web design as navigation links, among other things.

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Links</title>
</head>

<body>
  <nav>
    <ul>
      <li><a href="./index.html">Home</a></li>
      <li><a href="./articles.html">Blogs</a></li>
      <li><a href="./galary.html">Gallery</a></li>
      <li><a href="./about-us.html">About Us</a></li>
      <li><a href="./contact-us.html">Contact Us</a></li>
    </ul>
  </nav>
</body>

</html>
```

You may choose to connect an email or open the content to another page during the design stage.

Email Links:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Links</title>
</head>

<body>
  <a href="mailto:mohammad.khaled@outlook.com">Email Mohammad Abu Mattar</a>
</body>

</html>
```

Opening Links in a New Window:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Links</title>
</head>

<body>
  <a href="https://mkabumattar.github.io/v1" target="_blank"> My Portfolio</a>
</body>

</html>
```

You might sometimes want to refer to the same section page or to a particular part on another page.


```html
<!DOCTYPE html>
<html lang="en">

<head>
  <title>Links</title>
</head>

<body>
  <header>
    <nav>
      <ul>
        <li><a href="#introduction">Introduction</a></li>
        <li><a href="#first-section">First Section</a></li>
        <li><a href="#second-section">Second Section</a></li>
      </ul>
    </nav>
  </header>
  <section>
    <h1 id="introduction">Introduction</h1>
  </section>
  <main>
    <section id="first-section">
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque numquam sit ut officia illum iusto
        recusandae repellat quae, illo consequuntur distinctio laboriosam doloribus! Beatae harum maxime culpa totam?
        Nam, accusantium.</p>
      <p>Quasi, animi in. Placeat tenetur aliquam dolor illo veniam facere quidem atque non voluptate rem voluptates,
        necessitatibus commodi? Voluptate optio sequi exercitationem consectetur vel at maiores, eligendi molestias quos
        deleniti?</p>
      <p>Quia aspernatur corrupti debitis veritatis voluptas, inventore assumenda dolores! Quo, labore architecto. Nulla
        omnis veniam sequi nobis veritatis numquam debitis eligendi non ducimus. Ullam dolor obcaecati rem, quis error
        pariatur?</p>
      <p>Nihil molestiae ad recusandae dignissimos, sed ullam odit harum est velit numquam. Laborum vero explicabo vel
        nisi consectetur pariatur, eveniet molestiae rerum tenetur ex. In eveniet a dolor culpa eaque?</p>
      <p>Ullam assumenda quos commodi, sunt blanditiis molestiae eos doloribus consectetur vero hic ea, facilis corrupti
        quaerat fugit! Perferendis, reiciendis vel cum corporis voluptas deleniti saepe deserunt quis, numquam sint qui!
      </p>
      <p>Repellat a velit accusantium ex ullam suscipit beatae consequuntur distinctio dolore quos? Labore, corporis
        quam sit cumque distinctio consequatur assumenda repellendus quidem voluptatibus, veritatis debitis expedita vel
        optio! Quisquam, quasi.</p>
      <p>Sed, ab! Aliquid, sunt ut? Expedita, repellat culpa dolorum, porro tempora libero vel dignissimos recusandae
        ipsa quis dolore sed eos. Autem suscipit ipsum id illo quos at. Incidunt, repellendus magnam.</p>
      <p>Quidem dolores debitis molestiae obcaecati maxime, ab quasi et delectus? Earum distinctio sequi, placeat
        pariatur commodi consequuntur vel consectetur illum quisquam est nulla veritatis culpa soluta facilis odit,
        adipisci dolore.</p>
      <p>Minus dignissimos, reiciendis amet maiores, debitis suscipit consequuntur modi, unde adipisci error doloribus?
        Natus repellendus amet hic, sunt eaque, accusantium odit inventore, dolorem magni dolores velit consequatur
        autem unde. Provident.</p>
      <p>Excepturi eligendi eaque adipisci mollitia veniam vero quae aperiam itaque magnam possimus? Ipsa mollitia nobis
        modi, aperiam, perspiciatis sunt quasi eligendi aut dolores esse laboriosam aliquid accusantium, labore magnam
        tempora.</p>
    </section>
    <section id="second-section">
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste ducimus cum at saepe voluptate sint aut, vitae
        aspernatur, possimus praesentium fuga tempora aliquid suscipit nostrum. Quod soluta architecto rerum iste.</p>
      <p>Nam ea magnam ex blanditiis corrupti similique recusandae voluptates quis provident deserunt, quidem
        reprehenderit soluta quasi nobis veritatis beatae? Temporibus culpa labore incidunt nisi natus tempora
        doloremque eveniet, repellendus ad!</p>
      <p>Laborum nobis vel officiis explicabo, sit dicta quis numquam illo asperiores, officia sequi odio blanditiis!
        Placeat quos, molestiae corrupti ipsa quibusdam optio tempora culpa voluptatem, magnam quis, dolores magni
        nulla.</p>
      <p>Blanditiis nihil magni optio earum fuga eaque! Atque, fugiat minus quia magni culpa ad alias tenetur, eos sint,
        sit quod hic! Consequatur dolorum rerum recusandae incidunt magnam deserunt dignissimos sed.</p>
      <p>Earum sequi ducimus labore, quis cupiditate velit facilis reprehenderit ex atque commodi corporis a at illum
        nesciunt quibusdam fugit dolores autem. Tempore, quod optio. Similique unde dolorum odio illum hic?</p>
      <p>Accusantium fuga ullam officiis blanditiis corporis reiciendis, adipisci beatae sed corrupti, quibusdam quo,
        modi debitis. Accusantium ad quas, perspiciatis atque obcaecati laudantium? Exercitationem, dolorem autem
        ratione labore assumenda libero molestias?</p>
      <p>Possimus quae voluptatum saepe, assumenda, doloribus eos optio natus aspernatur perferendis voluptate deleniti
        a dolores et voluptatem eius officiis. Rerum atque consectetur repellendus consequatur dolores necessitatibus
        dolor temporibus porro cum!</p>
      <p>Earum vel aliquam eius maiores numquam maxime cumque nam, omnis obcaecati, error quia ut voluptatibus
        accusantium saepe! Aut culpa modi ea, sint fugit amet non odit inventore. Quisquam, eius officiis.</p>
      <p>Excepturi voluptate harum voluptas consequatur, accusamus enim ea, consectetur, pariatur velit numquam nam est.
        Autem porro magnam suscipit. Voluptatem aut magnam obcaecati ipsa asperiores cumque voluptates qui? Nihil, unde
        officiis.</p>
      <p>Error, ipsum aspernatur iusto quam rem quos ducimus tempore reiciendis vero obcaecati laboriosam porro, nisi
        inventore. Dolorem reprehenderit dignissimos, iusto tenetur ipsum totam quaerat eos consectetur saepe sunt,
        impedit velit.</p>
    </section>
  </main>
</body>

</html>
```

this dummy text to show it use emmet command, `header>nav>ul>li*3>a`, and `main>section*2#>p*10>Lorem`

[Back to Content](#content)

### Layout

In the design stage, the layout is how you control the items on the page to show as your guidance. Each layout of the page has a different instruction on who you design it for by using UI/UX approach for best practicing, or your targeting audience, for more information read this article [Pedagogy Vs Andragogy In eLearning: Can You Tell The Difference?](https://elearningindustry.com/pedagogy-vs-andragogy-in-elearning-can-you-tell-the-difference).

When designing the layout, keep in mind the various device sizes, such as smartphone, tablet, and screen resolution.

[Back to Content](#content)

## JavaScript

### Functions, Methods, and Objects

You may use functions to merge sentences to achieve a specific goal. A code block is made up of one or more sentences enclosed in curly braces. A code block encapsulates all of the steps that the feature would take to accomplish its task.

previous [lab work](https://github.com/MKAbuMattar/lab-06b-design-web-pages-with-css)


app.js JavaScript file
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

style.css CSS file
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

index.html HTML file
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

and we discuss declaring function at reading note [Read: 04 - Programming with JavaScript](../class04/READ04A#function)

[Back to Content](#content)

## Pair Programming

The content below is an excerpt from the article. [1](#001)

Most agile work practices use pair programming as a technique. It helps programmers to scan code for errors line by line and character by character.

There are two functions in pair programming: the Driver and the Navigator. The Driver is the only programmer with their hands on the keyboard and is clicking. The Navigator directs the Driver with their vocabulary but does not give the robot any direct feedback. Pair programming can be done in a variety of ways.

There are four basic skills that anyone should use to learn a foreign language. During a five-hour paired lab session, Code Fellows students focus on all four. The skills they develop will benefit them in completing tasks, communicating and practicing on their own, in interviews, and in preparing for a career at an organization that practices agile.

[Back to Content](#content)

### Greater efficiency

It's better to catch errors in the making when two people work on the same code base. Pair programming, according to studies, takes a little longer but yields higher-quality code. It's also more effective in the long term than having two employees operating on different features. Two programmers may arrive at a solution faster while brainstorming ideas and proposing solutions aloud.

[Back to Content](#content)

### Engaged collaboration

The atmosphere is more stimulating and concentrated when two programmers work on the same code. It's more difficult to procrastinate when everyone else is counting on you to finish the job. Knowing where to call for guidance is also a vital part of learning to program. Before approaching a teaching assistant or tutor, we recommend that students spend no more than fifteen minutes stuck on a topic.

[Back to Content](#content)

### Learning from fellow students

Pair programming introduces a new approach to the other creator. Sometimes, the skill sets of the developers in a pair are disparate. If one developer has more expertise in a certain skill, they will teach it to a student who has less experience.

[Back to Content](#content)

### Social skills

When communicating with someone who has a different coding style than you, communication is crucial. Using the best words is an art form in and of itself. Pair programming may assist in the growth of interpersonal skills in programmers. It's important to recruit programmers who can communicate successfully with others.

[Back to Content](#content)

### Job interview readiness

Pair programming between a current employee and a candidate is a standard phase in multiple interview procedures. They'll do things like programming competitions and creating a project or function together. Companies will get a better sense of how a candidate would blend with the team this way.

[Back to Content](#content)

### Work environment readiness

Many companies that utilize pair programming expect to train fresh hires from CS-degree programs on how they operate. Code Fellows graduates who are already familiar with how pairing.

[Back to Content](#content)

## Reference

#### 001
Code Fellows. (2018). 6 Reasons for Pair Programming. [online] [Available at:](https://www.codefellows.org/blog/6-reasons-for-pair-programming/) [Accessed 15 Mar. 2021].

[Back to Content](#content)

***

[⇐ Home Page](../README.md)