import React, { useState } from "react";
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
  {
    title: "Self Improvement",
    url: "https://github.com/jwang1/",
    author: "Jun, Ray",
    num_comments: 28,
    points: 5,
    objectID: 3,
  },
];

// Why react bootstrap creates function instead of class
// https://stackoverflow.com/questions/56297983/create-react-app-generates-function-instead-of-class-in-app-js

// Official site using hooks, since React 16.8
// https://reactjs.org/docs/hooks-state.html

function App() {
  const [books, setBooks] = useState(list);
  const [searchTerm, setSearchTerm] = useState('');

  // Higher order function -- isSearched function returns another function
  // Note, this isSearched is used in the component, 
  //       and the "searchTerm" is the state of the component <-- which changes along with
  //       the form's input, the onSearchChanged fires when users input 
  //          1) <-- when input changes 
  //          2) <-- searchTerm "state" of the component changed,
  //          3) <-- since searchTerm "state" is used in component's list element, 
  //                 via isSearched higher-order-function used in list.filter(...), 
  //
  //          These trigger the hacker news list updated
  //
  const isSearched = (searchTerm) => 
    (item) => !searchTerm || item.title.toLowerCase().includes(searchTerm.toLowerCase());

  function onDismiss(id, e) {
    let currentBooks = books.filter((i) => i.objectID !== id);
    console.log("After dismiss: id: " + id);
    console.log("----> currentBooks after dismiss id: " + id);
    printBooks(currentBooks);
    console.log("===> original Books: ");
    printBooks(books);
    setBooks(currentBooks);
  }

  function printBooks(bks) {
    if (bks) {
      console.log(
        arguments.toString() +
          ": " +
          bks.map((e) => e.objectID + ":" + e.title).join("\n")
      );
    }
  }

  function onRestore(e) {
    setBooks(list);
  }

  function onSearchChange(e) {
    console.log("e.target.value = " + e.target.value);
    setSearchTerm(e.target.value);
  }

  //const jsxPreventsCssByEscapingUserInput = response.potentiallyMaliciousInput;

  return (
    <div className="App">
      <span>
        <button onClick={(e) => onRestore(e)} type="button">
          Restore
        </button>
      </span>

      <div>
        <form >
          <input type="text" 
          onChange={e => onSearchChange(e)}/>
        </form>
      </div>

      {books.filter(isSearched(searchTerm)).map((item, i) => (
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <span>
            <button onClick={(e) => onDismiss(item.objectID, e)} type="button">
              Dismiss
            </button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
