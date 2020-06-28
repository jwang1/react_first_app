import React, {useState} from "react";
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

  function onDismiss(id) {
    const updatedList = list.filter( i => i.objectID !== id );
    console.log("id: " + id + ", updatedList: " + updatedList.length);
    setBooks(updatedList);
  }

  //const jsxPreventsCssByEscapingUserInput = response.potentiallyMaliciousInput;

  return (
    <div className="App">
      {books.map((item, i) => (
        <div key={item.objectID}>
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span>{item.author}</span>
          <span>{item.num_comments}</span>
          <span>{item.points}</span>
          <span>
            <button onClick={e => onDismiss(item.objectID, e)}
              type="button">Dismiss</button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default App;
