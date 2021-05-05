import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={["/", "/businesses"]}>
            <Home />
          </Route>
          <Route exact path="/businesses/:id">
            <Details />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
