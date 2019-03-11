import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Books from "./pages/Books";
import BrowsePage from "./pages/BrowsePage";
import BrowseStories from "./pages/BrowseStories";
//import Detail from "./pages/Detail";
import ReadDetail from "./pages/ReadDetail";
import TextEditor from "./pages/TextEditor";
import NoMatch from "./pages/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={BrowsePage} />
          <Route exact path="/write" component={BrowsePage} />
          <Route exact path="/write/:id" component={TextEditor} />
          <Route exact path="/read" component={BrowseStories} />
          <Route exact path="/read/:piece_id" component={ReadDetail} />
          <Route exact path="/users/login" component={Login} />
          <Route exact path="/users/register" component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
