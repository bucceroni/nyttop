import React from "react";
//REACT ROUTER
import { Route, Switch } from "react-router-dom";

//CONTAINERS
import Home from "./containers/Home";
import HealthNews from "./containers/HealthNews";
import PoliticsNews from "./containers/PoliticsNews";
import ScienceNews from "./containers/ScienceNews";
import TechnologyNews from "./containers/TechnologyNews";
import WorldNews from "./containers/WorldNews";
import DetailNews from "./containers/DetailNews";
import NotFound from "./containers/NotFound";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/health" component={HealthNews} />
      <Route exact path="/politics" component={PoliticsNews} />
      <Route exact path="/science" component={ScienceNews} />
      <Route exact path="/technology" component={TechnologyNews} />
      <Route exact path="/world" component={WorldNews} />
      <Route path="/:category/:id" component={DetailNews} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
