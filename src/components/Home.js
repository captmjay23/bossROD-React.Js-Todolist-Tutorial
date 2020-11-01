import React from "react";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const GotoTodoList = () => {
    history.push("./todolist");
  };
  return (
    <div className="home-section">
      <h1>You are in Home Page!</h1>
      <button type="button" onClick={GotoTodoList}>
        Start Now
      </button>
    </div>
  );
};

export default Home;
