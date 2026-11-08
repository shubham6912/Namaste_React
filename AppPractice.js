import React from "react";
import * as ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Namaste React :)",
);

// To make react easier to write Facebook people created JSX

console.log(heading);

// JSX  - HTML like syntax or XML like syntax

// JSX code transpiled before going to JS Engine which is done by PARCEL - Babel

const jsxHeading = (
  <h1 id="heading" className="head">
    {" "}
    Namaste React using JSX{" "}
  </h1>
);

// If you are writing in multiple lines

//const jsxHeadingMulti =(<h1 id="multipleHeading"> Multiple Heading</h1>);
// JSX => React.createElement => ReacElement- JS Element Object => HTMLElement(render)

console.log(jsxHeading);

//React Component
//Class Based components - OLD way
// Functional Componnets - new way

//Functional Component

// Below examples both are same way of writing

/*
const HeadingComponent = () => {
    return <h1 className="heading"> Namaste React Functional Component</h1>
};
*/

// React Component
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
  </h1>
);

// React Element

const elem = <span> ReacElement </span>;
const title = (
  <h1 className="head" tabIndex="5">
    Namaste React using JSX
    {elem}
  </h1>
);

const number = 100;
const HeadingComponent2 = () => (
  <div id="container">
    {title}
    <h1 className="heading"> Namaste React Functional Component</h1>
    <h2>{number * 5}</h2>
    {Title()}
  </div>
);

// In JSX we can write { } and inside that we can write any JS code
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent2 />);
