# Read: 14a - CSS Transforms, Transitions, and Animations

## Content

- [CSS Transforms](#css-transforms)
- [Transitions & Animations](#transitions--animations)
- [8 simple CSS3 transitions that will wow your users](#8-simple-css3-transitions-that-will-wow-your-users)
- [6 Buttons animated](#6-buttons-animated)
- [I have some trick in CSS](#i-have-some-trick-in-css)
- [Reference](#reference)


***

## CSS Transforms

With CSS3 came new ways to position and alter elements. All of these new techniques are made possible by the transform property. The transform property comes in two different settings, two-dimensional and three-dimensional. In this lesson we'll take a look at both two- dimensional and 3-dimensional transforms. We'll also look at how to use the transforms in the nightly version of Chrome.

CSS
```css
div {
  -webkit-transform: scale(1.5);
     -moz-transform: scale(1.5);
       -o-transform: scale(1.5);
          transform: scale(1.5);
}
```

Transforms are used to distort, or transform, elements on a two-dimensional or three-dimensional plane. The transform property includes multiple vendor prefixes to gain the best support across all browsers. In the interest of brevity, the remainder of this lesson will not include these prefixes. We'll start by discussing how to transform elements in two-D and then work our way into three-D. The default point of rotation is the center of the element, 50% 50%, both horizontally and vertically. Later we will discuss how to change this default point to a more effective point of rotate. The rotate value provides the ability to rotate an element from 0 to 360 degrees.

HTML
```html
<figure class="box-1">Box 1</figure>
<figure class="box-2">Box 2</figure>
```
CSS
```css
.box-1 {
  transform: rotate(20deg);
}
.box-2 {
  transform: rotate(-55deg);
}
```

***
***

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="shayhowe" data-slug-hash="AKDIp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Rotate">
  <span>See the Pen <a href="https://codepen.io/shayhowe/pen/AKDIp">
  Rotate</a> by Shay Howe (<a href="https://codepen.io/shayhowe">@shayhowe</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

***
***

The gray box behind the rotated element symbolizes the original position of the element. The scale value within the transform property allows you to change the appeared size of an element. Keep an eye out for the gray box within each demonstration as a reference to the element's original position and the horizontal rotation.

HTML
```html
<figure class="box-1">Box 1</figure>
<figure class="box-2">Box 2</figure>
```

CSS
```css
.box-1 {
  transform: scale(.75);
}
.box-2 {
  transform: scale(1.25);
}
```

***
***

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="shayhowe" data-slug-hash="khtnm" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Scale">
  <span>See the Pen <a href="https://codepen.io/shayhowe/pen/khtnm">
  Scale</a> by Shay Howe (<a href="https://codepen.io/shayhowe">@shayhowe</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

***
***

and have a lot and a lot of Transforms....

[Back to Content](#content)

## Transitions & Animations

With CSS3 transitions and animations can be added to HTML and CSS without the use of JavaScript or Flash. Animations allow the appearance and behavior of an element to be altered in multiple keyframes. For a transition to take place, an element must have a change in state, and different styles must be identified for each state. There are four transition related properties in total, including the:hover,:focus,:active, and:target pseudo-classes. In the example below the background will change its background color over the course of 1 second in a linear fashion.

```css
.box {
  background: #2db34a;
  transition-property: background;
  transition-duration: 1s;
  transition-timing-function: linear;
}
.box:hover {
  background: #ff7b29;
}
```

***
***

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="shayhowe" data-slug-hash="aCwcK" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Transition">
  <span>See the Pen <a href="https://codepen.io/shayhowe/pen/aCwcK">
  Transition</a> by Shay Howe (<a href="https://codepen.io/shayhowe">@shayhowe</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

***
***

```css
.box {
    background: #2db34a;
    -webkit-transition-property: background;
       -moz-transition-property: background;
         -o-transition-property: background;
            transition-property: background;
    -webkit-transition-duration: 1s;
       -moz-transition-duration: 1s;
         -o-transition-duration: 1s;
            transition-duration: 1s;
    -webkit-transition-timing-function: linear;
       -moz-transition-timing-function: linear;
         -o-transition-timing-function: linear;
            transition-timing-function: linear;
}
.box:hover {
  background: #ff7b29;
}
```

The transition-property property determines exactly what properties will be altered by changing an element's state. Only the properties identified within the transition- property value will be affected by any transitions. If multiple properties need to be transitioned they may be comma separated within the property value. The keyword all may be used to transition all properties of an element. For example, the background property is the only property that will change over the duration of 1 second.

like a Transforms have many many methods, you can try it.

[Back to Content](#content)

## 8 simple CSS3 transitions that will wow your users

You will see a collection of simple-to-use CSS transitions tricks and techniques, like Fade in or Change color... and the last not so long 8 tricks useful for build website have good look and nice UI/UX

[Back to Content](#content)

## 6 Buttons animated

***
***

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="retyui" data-slug-hash="ByoaXV" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="6 Buttons animated">
  <span>See the Pen <a href="https://codepen.io/retyui/pen/ByoaXV">
  6 Buttons animated</a> by DNRB (<a href="https://codepen.io/retyui">@retyui</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

***
***

[Back to Content](#content)

## I have some trick in CSS

Responsive navbar css-only sticky top

***
***

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="MKAbuMattar" data-slug-hash="qBbxpZB" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title=" Responsive navbar css-only sticky top">
  <span>See the Pen <a href="https://codepen.io/MKAbuMattar/pen/qBbxpZB">
   Responsive navbar css-only sticky top</a> by Mohammad Abu Mattar (<a href="https://codepen.io/MKAbuMattar">@MKAbuMattar</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

***
***

Color-changing background with animated stars

***
***

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="result" data-user="MKAbuMattar" data-slug-hash="ExgQOVp" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Password Generator">
  <span>See the Pen <a href="https://codepen.io/MKAbuMattar/pen/ExgQOVp">
  Password Generator</a> by Mohammad Abu Mattar (<a href="https://codepen.io/MKAbuMattar">@MKAbuMattar</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

***
***

you can crack my work in CodePen [codepen.io/MKAbuMattar](https://codepen.io/MKAbuMattar)

[Back to Content](#content)

## Reference

Shayhowe.com. (2021). Transforms - Learn to Code Advanced HTML & CSS. [online] Available at: https://learn.shayhowe.com/advanced-html-css/css-transforms/ [Accessed 30 Mar. 2021].

Shayhowe.com. (2021). Transitions & Animations - Learn to Code Advanced HTML & CSS. [online] Available at: https://learn.shayhowe.com/advanced-html-css/transitions-animations/ [Accessed 30 Mar. 2021].

Webdesignerdepot.com. (2014). 8 Simple CSS3 Transitions That Will Wow Your Users | Webdesigner Depot Webdesigner Depot» Blog Archive. [online] Available at: https://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users [Accessed 30 Mar. 2021].


[Back to Content](#content)

***

[⇐ Home Page](../../README.md)


<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>