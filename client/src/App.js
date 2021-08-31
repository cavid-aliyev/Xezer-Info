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
const App = () => {
  const currentUser = true;
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
        <Route path="/register">
          {currentUser ? <Homepage /> : <Registerpage />}
        </Route>
        <Route path="/login">
          {currentUser ? <Homepage /> : <Loginpage />}
        </Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/create">
          {currentUser ? <Createpage /> : <Loginpage />}
        </Route>
        <Route path="/settings">
          {currentUser ? <Settingspage /> : <Loginpage />}
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
