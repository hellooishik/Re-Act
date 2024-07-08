// Handling Events in React
// In React, handling events is very similar to handling events in plain HTML, but with some syntactic differences and improvements. React events are named using camelCase, and you pass a function as the event handler rather than a string.
// Key Differences from HTML
// 1. **Event Naming**: React uses camelCase for event names (e.g., `onClick` instead of `onclick`).
// 2. **Function Handling**: You pass a function directly to the event handler (e.g., `onClick={handleClick}`).
//  Commonly Used Events
//  Handling Events with Functional Components
// Let's look at a simple example where we handle a button click event.
// **Example: Handling Button Clicks**

import React, { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

// export default ClickCounter;

// In this example:
// - We define a state variable `count` and a function `handleClick` that increments `count`.
// - The `onClick` event handler on the button calls the `handleClick` function when the button is clicked.
// ### Handling Events with Class Components
// Let's look at the same example using a class component.
// **Example: Handling Button Clicks**

import React, { Component } from "react";

class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

// this.set will be used in the total calculated sources
// export default ClickCounter;

// In this example:
// - We define a state variable `count` in the constructor and a method `handleClick` that increments `count`.
// - The `onClick` event handler on the button calls the `handleClick` method when the button is clicked.

// Passing Arguments to Event Handlers

// Sometimes you may want to pass additional arguments to the event handler. You can do this using an arrow function.

// **Example: Passing Arguments**

import React from "react";

function App() {
  const handleClick = (id) => {
    console.log(`Clicked item with id: ${id}`);
  };

  return (
    <div>
      <button onClick={() => handleClick(1)}>Item 1</button>
      <button onClick={() => handleClick(2)}>Item 2</button>
    </div>
  );
}

// export default App;

// In this example:
// - The `handleClick` function takes an `id` as an argument.
// - We pass the `id` to the `handleClick` function using an arrow function in the `onClick` event handler.

// Handling Form Events

// Let's look at an example of handling form events, such as input changes and form submissions.

// **Example: Handling Input Changes and Form Submission**

import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted name: ${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;

// In this example:
// - The `handleChange` function updates the `name` state variable when the input value changes.
// - The `handleSubmit` function displays an alert with the submitted name and prevents the default form submission behavior.

// Summary

// - **Event Handling in React**: React handles events similarly to HTML, but with camelCase naming and functions as handlers.
// - **Functional Components**: Use `useState` and arrow functions to handle events.
// - **Class Components**: Use `this.state` and class methods to handle events.
// - **Passing Arguments**: Use arrow functions to pass arguments to event handlers.
// - **Form Events**: Handle input changes and form submissions with appropriate event handlers.
