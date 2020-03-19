import React, { Component } from "react";

export class ShowRoute extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default ShowRoute;
