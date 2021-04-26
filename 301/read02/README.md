# Readings: State and Props

***

# Content

- [State and Lifecycle](#state-and-lifecycle)
- [Handling Events](#handling-events)
- [Conditional Rendering](#conditional-rendering)
- [Reference](#reference)

***

# State and Lifecycle

What is a State in React?

Property values for the component are stored in the state entity. The item is re-rendered as the state object shifts.

What is a Lifecycle in React?

During the three key stages, you can track and control the lifecycle. Mounting, updating, and unmounting are the three stages.

Example in Lifecycle:

index.html
```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
</html> 
```

index.js
```js
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
```

In the previous case, we used function; however, in this course, we'll use Class; however, the question remains: how do we do lifecycle in respond on a class? We'll need to use state to address this.

index.html
```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
</html> 
```

index.js
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

React figures out what can be seen on the projector. The DOM is then modified to fit the performance of the DOM. Every second, the Clock variable calls `setState()` with an object containing the current time to schedule a UI update. This time, the `render()` method's this.state will be different, and the render output will contain the new time. React calls the `componentWillUnmount()` lifecycle function to interrupt the timer if the Clock is ever removed from the DOM. If it is applied to the DOM again, React will make the necessary changes to the DOM.

[Back to Content](#content)

# Handling Events

Using React elements to handle events is somewhat close to using DOM elements. There are some variations in syntax: CamelCase is used to call React occurrences instead of lowercase. Instead of passing a string as the event handler, JSX allows you to pass a method.

index.html
```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
</html> 
```

index.js
```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```

Class methods are not bound by default in JavaScript. If you fail to tie this, it will be lost. handleClick and transfer it to onClick; until the operation is finally named, this would be unknown. This isn't a React-specific behavior; it's just how JavaScript functions operate.

[Back to Content](#content)

# Conditional Rendering

You can construct separate components in React that encapsulate the actions you want. Then, based on the application's condition, you can render only a subset of them. The same way requirements function in JavaScript, conditional rendering in React works the same way. Build elements representing the current state using JavaScript operators including if and the conditional operator, and React will change the UI to fit.

We'll make a stateful component named `<LoginControl />` that will render either a `<LoginButton />` or a `<LogoutButton />` based on its current state. It will also show a greeting.

index.html
```html
<!DOCTYPE html>
<html>
  <body>
    <div id="root"></div>
  </body>
</html> 
```

index.js
```js
class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
);
```

> Note: I try some of above in this project GitHub: [Mathematics](#https://github.com/MKAbuMattar/mathematics) Live URL: [Mathematics](#https://more-math.netlify.app/), I used few package in at like 1. `React Router Dom`, 2. `React mathJAX`, 3. `React Bootstrap`, 4. `React smooth scroll`.

[Back to Content](#content)

***

## Reference

## 1
Reactjs.org. (2020). State and Lifecycle – React. [online] Available at: https://reactjs.org/docs/state-and-lifecycle.html [Accessed 26 Apr. 2021].

## 2
Reactjs.org. (2020). Handling Events – React. [online] Available at: https://reactjs.org/docs/handling-events.html [Accessed 26 Apr. 2021].

## 3
Reactjs.org. (2020). Conditional Rendering – React. [online] Available at: https://reactjs.org/docs/conditional-rendering.html [Accessed 26 Apr. 2021].

## 4
Reactjs.org. (2020). Tutorial: Intro to React – React. [online] Available at: https://reactjs.org/tutorial/tutorial.html [Accessed 26 Apr. 2021].

[Back to Content](#content)

[⇐ Home Page](../../README.md)
