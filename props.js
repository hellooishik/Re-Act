//  Props: Learn How to Pass Data to Components via Props

//  What are Props?
// Props (short for properties) are a way to pass data from a parent component to a child component in React. Props are read-only, meaning that a component receiving props cannot modify them. They help to make components more dynamic by allowing them to receive data and behavior as input from their parent component.

// Passing Props to a Component
// You can pass props to a component by adding attributes to the component when you use it. These attributes can be any valid JavaScript data type, including strings, numbers, arrays, objects, or even functions.

// Example:

import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;


// In the parent component:

import React from 'react';
import Welcome from './Welcome';

function App() {
  return (
    <div>
      <Welcome name="Alice" />
      <Welcome name="Bob" />
    </div>
  );
}

export default App;


// In this example, the `Welcome` component receives a prop called `name` and displays it.

// Accessing Props
// Inside the component, props are accessed using the `props` object. For functional components, `props` are passed as an argument to the function. For class components, `props` are available as `this.props`.

// Example with Class Component:

// The Components based React.RouterDom Pushed

import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

export default Welcome;


//  Default Props
// You can define default values for props using the `defaultProps` property. This ensures that your component has a default value if the prop is not passed.

// Example:

import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Welcome.defaultProps = {
  name: 'Guest'
};

export default Welcome;


// In this example, if the `name` prop is not provided, it defaults to "Guest".

//  PropTypes
// React provides a way to check the types of props passed to a component using `prop-types`. This helps catch errors early and improves code readability.

// First, install the `prop-types` package:
```sh
npm install prop-types
```

// Then, define the expected prop types in your component:

import React from 'react';
import PropTypes from 'prop-types';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired
};

export default Welcome;


// In this example, if the `name` prop is not a string or is not provided, a warning is shown in the console.

// Passing Functions as Props
// You can pass functions as props to handle events or actions in the parent component from the child component.

// Example:

import React from 'react';

function Button(props) {
  return <button onClick={props.handleClick}>Click me</button>;
}

export default Button;


// In the parent component:

import React from 'react';
import Button from './Button';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <div>
      <Button handleClick={handleClick} />
    </div>
  );
}

export default App;

// the set of intgers will be falied
// In this example, the `Button` component receives a `handleClick` function as a prop and calls it when the button is clicked.

//  Summary
// Props are essential in React for passing data and behavior from parent to child components. They are read-only, making components more predictable and easier to debug. By using props, you can create dynamic and reusable components that can adapt based on the data they receive.

