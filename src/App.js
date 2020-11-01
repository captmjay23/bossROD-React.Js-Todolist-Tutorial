import React from "react";
import { Switch, Route } from "react-router-dom";

/* Components */
import Home from "./components/Home";
import TodoList from "./components/Todo-list";

const App = () => {
  return (
    <div className="main">
      <Switch>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/todolist">
            <TodoList />
        </Route>
        <Route path="/">
            <Home />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
