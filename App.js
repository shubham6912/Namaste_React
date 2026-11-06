
import React from "react";
import * as ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1",
    { id: "heading", xyz: "abc" },
    "Hello world from React!!!"
);

console.log(heading);

const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1",
        key: "child1"
    }, [
        React.createElement("h1", {
            id: "child1H1",
            key: "child1H1"
        }, "Child 1 Heading 1"),
        React.createElement("h1", {
            id: "child1H3",
            key: "child1H3"
        }, "Child 3 Heading 3"),

        React.createElement("h1", {
            id: "child1H2",
            key: "child1H2"
        }, "Child 1 Heading 2")
    ]),

    React.createElement("div", {
        id: "child2",
        key: "child2"
    }, [
        React.createElement("h1", {
            id: "child2H1",
            key: "child2H1"
        }, "Child 2 Heading 1"),

        React.createElement("h1", {
            id: "child2H2",
            key: "child2H2"
        }, "Child 2 Heading 2")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
