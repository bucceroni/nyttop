import React from "react";
//REACT ROUTER
import { Route, Switch } from "react-router-dom";

//CONTAINERS
import News from "./containers/News";
import DetailNews from "./containers/DetailNews";
import NotFound from "./containers/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={News} />
      <Route exact path="/health" component={News} />
      <Route exact path="/politics" component={News} />
      <Route exact path="/science" component={News} />
      <Route exact path="/technology" component={News} />
      <Route exact path="/world" component={News} />
      <Route path="/:category/:id" component={DetailNews} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
