import React from "react";
import logo from "./logo.svg";
import "./App.css";

const list = [
  {
    title: "React",
    url: "https://facebook.github.io/react/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://github.com/reactjs/redux",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  const fname = "John";
  const lname = "Doe";

  //const jsxPreventsCssByEscapingUserInput = response.potentiallyMaliciousInput;

  return (
    <div className="App">

      { list.map( (item, i) => <div key={i}>{item.title}</div> ) } 

    </div>
  );
}

export default App;
