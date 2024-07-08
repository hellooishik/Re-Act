//  What are Hooks?

// Hooks are special functions introduced in React 16.8 that allow you to use state and other React features in functional components. Before Hooks, you could only use state and lifecycle methods in class components. Hooks enable functional components to be more powerful and flexible.

//  Why Hooks?

// 1.Simpler Code**: Hooks let you write components using functions instead of classes, leading to simpler and more readable code.
// 2. Reusability**: Hooks allow you to extract and reuse stateful logic across multiple components.
// 3. Improved Organization**: Hooks help organize related logic together, making components easier to understand and maintain.

// Commonly Used Hooks

// 1. `useState`
// The `useState` hook allows you to add state to functional components.

// **Example**:

import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

// export default Counter;

// - `useState(0)` initializes the state variable `count` with an initial value of 0.
// - `setCount` is a function that updates the state.

// 2. `useEffect`
// The `useEffect` hook allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM.

// **Example**:

import React, { useState, useEffect } from "react";

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []); // The empty array means this effect runs once, similar to componentDidMount

  return (
    <div>
      <p>Data: {data}</p>
    </div>
  );
}

// export default DataFetcher;

// - `useEffect` runs the side effect (fetching data) after the component renders.
// - The empty array `[]` ensures the effect runs only once, similar to `componentDidMount` in class components.

//  3. `useContext`
// The `useContext` hook allows you to access context values directly in functional components.

// **Example**:

import React, { useContext } from "react";

const ThemeContext = React.createContext("light");

function ThemedComponent() {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      The current theme is {theme}
    </div>
  );
}

// export default ThemedComponent;

// - `useContext(ThemeContext)` allows you to access the current value of `ThemeContext`.

// ### Summary of Hooks Benefits

// - **State Management**: Manage state in functional components with `useState`.
// - **Side Effects**: Perform side effects like data fetching or subscriptions with `useEffect`.
// - **Context**: Access context values with `useContext`.
// - **Custom Hooks**: Create your own hooks to encapsulate and reuse stateful logic.

//  Summary

// Hooks transform functional components into powerful and flexible components that can manage state, handle side effects, and access context. They simplify code, improve reusability, and help organize related logic. By using hooks, you can take full advantage of the capabilities of functional components in React.
