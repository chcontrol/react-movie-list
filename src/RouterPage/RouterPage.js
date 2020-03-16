import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MyDataTable from './../MyDataTable/MyDataTable'

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <MyDataTable />
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);
const Topics = () => (
  <div>
    <h2>Topics</h2>
  </div>
);

export class RouterPage extends Component {
  render() {
    return (
      <div>
        <BasicExample></BasicExample>
      </div>
    );
  }
}

export default RouterPage;
