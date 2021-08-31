import "./App.css";
import { Topbar } from "./components";
import { Homepage, Registerpage } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  const currentUser = false;
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
      </Switch>
    </Router>
  );
};

export default App;
