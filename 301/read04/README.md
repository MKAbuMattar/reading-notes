# Readings: React and Forms

***

# Content

- [Forms](#forms)
- [The Conditional](#the-conditional)
- [Reference](#reference)

***

# Forms

Since form elements naturally hold some internal state, they behave a little differently in React than other DOM elements.

When a user submits a form, the form's default HTML form action is to navigate to a new tab. It simply functions in React if you like this action. However, in most cases, using a JavaScript feature that manages form entry and has access to the data entered by the user is more convenient. A methodology known as "controlled components" is often used to do this.

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
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
```

The shown value will always be `this.state.value` since the value attribute is set on our form parameter, making the React state the source of fact. The displayed value will refresh when the user types since `handleChange` runs on any keystroke to update the React state.

React has the textarea Tag, the select Tag, the file input Tag, and other HTML tags, and as a numeral form, React can accommodate several inputs.

[Back to Content](#content)

# The Conditional

Beginning with the Fundamentals — The If Argument When we have a clause, such as an if sentence, we will determine that a certain block of code should be executed if a specific condition is reached.

Instead of longer if and else conditional sentences, use the ternary operator to make decisions. There are three arguments to the ternary operator: The first point is based on a distinction. The product of a true analogy is the second. and to make the coding easier to read.

Normal If Argument

```js
if(x===y){
  console.log(true);
} else {
  console.log(false);
}
```
Operator Conditional

```js
 console.log((x===y)? true : false);
```

[Back to Content](#content)

***

## Reference

## 1
Reactjs.org. (2020). Forms – React. [online] Available at: https://reactjs.org/docs/forms.html [Accessed 28 Apr. 2021].

## 2
Morelli, B. (2017). JavaScript — The Conditional (Ternary) Operator Explained. [online] Medium. Available at: https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff [Accessed 28 Apr. 2021].

[Back to Content](#content)

[⇐ Home Page](../../README.md)
