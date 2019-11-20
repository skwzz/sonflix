import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Home from "Routes/Home";
import Tv from "Routes/Tv";
import Search from "Routes/Search";
import Header from "Components/Header";

export default () => (
  <Router>
    <Header />
    <Switch>
      {/* Switch는 한 번에 오직 하나의 Route만 Render 하게함. */}
      <Route path="/" exact component={Home} />{" "}
      {/* exact는 path와 정확할 때 Route로 보내짐 */}
      <Route path="/tv" exact component={Tv} />
      <Route path="/search" component={Search} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);
