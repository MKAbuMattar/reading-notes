# Readings: Putting it all together

***

# Content

- [Thinking in React](#thinking-in-react)
- [Reference](#reference)

***

# Thinking in React

React is the most popular way to use JavaScript to create large, fast Web apps. React to help you care of applications as you create them is one of its many strengths.

Dividing the larger UI into smaller bits is a good idea. A pattern of child components nesting within parent (container) components will still exist. Look for UI elements that are used in several places in the app. Check if they will exist independently, which involves determining if they control their state or it is controlled by their parent `component`. If they're self-sufficient, look at the rendering and event management specifications. `SetState` can be thought of as a request and React to set a new state for the component rather than doing so synchronously. At the end of browser activities, React has its own algorithm for batching requests and flushing the state change. Don't put your confidence in it. state to represent new values as soon as `setState` is called. Don't put your confidence in it. state to represent new values as soon as `setState` is called. If you need to compute values depending on the current state, instead of passing an entity, pass an updater function. You can reach the current state by passing the updater function to the `setState` call. Don't make the component so complicated; each component must serve a particular purpose. Each component has just one task.

This example will demonstrate what I say.

***
***

<p class="codepen" data-height="265" data-theme-id="dark" data-default-tab="js,result" data-user="gaearon" data-slug-hash="LzWZvb" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Thinking In React: Step 5">
  <span>See the Pen <a href="https://codepen.io/gaearon/pen/LzWZvb">
  Thinking In React: Step 5</a> by Dan Abramov (<a href="https://codepen.io/gaearon">@gaearon</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

***
***

[Back to Content](#content)

***

## Reference

## 1
Reactjs.org. (2020). Thinking in React – React. [online] Available at: https://reactjs.org/docs/thinking-in-react.html [Accessed 29 Apr. 2021].


[Back to Content](#content)

[⇐ Home Page](../../README.md)

<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>