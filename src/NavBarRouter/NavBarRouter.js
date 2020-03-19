import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Clock from "./../Clock/Clock.js";
import MovieMain from "./../Movie/MovieMain.js";
import SelectOptions from "./../SelectOptions/SelectOptions.js";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Movie">Movie</Link>
          <Link to="/users">Users</Link>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Movie">
            <Movie />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <Clock />
    </div>
  );
}

function Movie() {
  return (
    <div>
      <MovieMain />
    </div>
  );
}

function Users() {
  return (
    <div>
      <SelectOptions />
    </div>
  );
}
