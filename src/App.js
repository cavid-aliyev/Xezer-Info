import './App.css';
import {Topbar} from './components'
import {Homepage} from './pages'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Topbar/>
      <Switch>
      <Route exact path="/">
          <Homepage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
