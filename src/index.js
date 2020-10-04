import React from "react";
import ReactDOM from "react-dom";

import FullHomePage from "./FullPages/FullHomePage";
import FullAboutPage from "./FullPages/FullAboutPage";
import FullServicePage from "./FullPages/FullServicePage";
import FullContactPage from "./FullPages/FullContactPage";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogForm from "./Blog/BlogForm";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact>
        <FullHomePage />
      </Route>
      <Route path="/services">
        <FullServicePage />
      </Route>
      <Route path="/about">
        <FullAboutPage />
      </Route>
      <Route path="/contact">
        <FullContactPage />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
