import "./App.css";
import { Topbar } from "./components";
import {
  Homepage,
  Registerpage,
  Loginpage,
  Single,
  Createpage,
  Settingspage,
} from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Context } from "./context/Context";
import React from "react";

const App = () => {
  const { user } = React.useContext(Context);
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/register">{user ? <Homepage /> : <Registerpage />}</Route>
        <Route path="/login">{user ? <Homepage /> : <Loginpage />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/create">{user ? <Createpage /> : <Loginpage />}</Route>
        <Route path="/settings">
          {user ? <Settingspage /> : <Loginpage />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
