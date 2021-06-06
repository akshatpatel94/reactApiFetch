import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Posts from "./components/Posts";
import User from "./components/User";
import Error from "./components/Error";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
//import Dummypro from "./components/Dummypro";
import "./styles.css";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/posts" component={Posts} />
          <Route path="/profile/:id" component={Profile} />
          <Route exact component={Error} />
        </Switch>
      </div>
    </>
  );
};
export default App;
