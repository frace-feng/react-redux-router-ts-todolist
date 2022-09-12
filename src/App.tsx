import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Router>
      <div className="main-content">
        <nav className="left-nav">
          <ul>
            <li>
              <NavLink to="/home" >Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/todoList">TodoList</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <div className="right-content">
          <Route path="/about">
            <About />
          </Route>
          <Route path="/todoList">
            <TodoList />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
