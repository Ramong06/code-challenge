import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import RatingPage from "./pages/RatingPage";



function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/RatingPage" component={RatingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
