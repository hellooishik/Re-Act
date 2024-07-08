//  State: Understanding State Management in Components

// What is State?

// State is a built-in object that allows a React component to keep track of data that changes over time. Unlike props, which are passed to a component and are read-only, state is managed within the component and can change. When the state of a component changes, the component re-renders to reflect the new state.

// Functional Components and State (Using Hooks)

// Before the introduction of Hooks, only class components could manage state. With Hooks, functional components can also have state.

// **Using `useState` Hook:**

// The `useState` hook is used to add state to functional components.

// Example:

// Functional Componnets Rendering

import React, { useState } from 'react';

function Counter() {
  // Declare a state variable named "count" with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      {/* Update the state variable when the button is clicked */}
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;


// In this example:
// - `useState(0)` initializes a state variable `count` with an initial value of 0.
// - `setCount` is a function that updates the state variable.
// - When the button is clicked, `setCount(count + 1)` updates the state, causing the component to re-render with the new state.

// #### Class Components and State

// Class components manage state using the `this.state` property and the `setState` method.

// Example:

import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      count: 0
    };
  }

  // Method to handle button click
  handleClick = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        {/* Update state when the button is clicked */}
        <button onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}

export default Counter;


// In this example:
// - The state is initialized in the constructor with `this.state`.
// - The handleClick` method updates the state using `this.setState`.
// - When the button is clicked, `this.setState` updates the state, causing the component to re-render with the new state.

//  Key Differences Between State and Props

// - **State**:
//    Managed within the component.
//   -Can be changed by the component.
//   - Use `useState` in functional components and `this.state`/`this.setState` in class components.

// - **Props**:
//   - Passed from parent to child components.
//   - Read-only and cannot be changed by the child component.

// ### Practical Example: Toggle Switch

// Let's create a simple toggle switch component to demonstrate state management.

// **ToggleSwitch Component:**

import React, { useState } from 'react';

function ToggleSwitch() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <p>The switch is {isOn ? 'On' : 'Off'}</p>
      <button onClick={toggle}>
        Toggle
      </button>
    </div>
  );
}

export default ToggleSwitch;


// In this example:
//  useState(false)` initializes the state variable `isOn` with `false`.
// - The `toggle` function updates the state by setting `isOn` to its opposite value.
// - When the button is clicked, the `toggle` function is called, updating the state and re-rendering the component.

// Summary

// - **State** is used to keep track of data that changes over time within a component.
// - Functional components use the `useState` hook to manage state.
// - Class components use the `this.state` property and `this.setState` method.
// - State changes trigger a re-render of the component to reflect the new state.

