import React from "react";
//REACT ROUTER
import { Route, Switch } from "react-router-dom";

//CONTAINERS
import Pages from "./containers/Pages";
import PagesHealth from "./containers/PagesHealth";
import PagesPolitics from "./containers/PagesPolitics";
import PagesScience from "./containers/PagesScience";
import PagesTechnology from "./containers/PagesTechnology";
import PagesWorld from "./containers/PagesWorld";
import DetailNews from "./containers/DetailNews";
import NotFound from "./containers/NotFound";

const Routes = props => {
  return (
    <Switch>
      <Route exact path="/" component={Pages} />
      <Route exact path="/science" component={PagesScience} />
      <Route exact path="/technology" component={PagesTechnology} />
      <Route exact path="/health" component={PagesHealth} />
      <Route exact path="/politics" component={PagesPolitics} />
      <Route exact path="/world" component={PagesWorld} />
      <Route path="/:category/:id" component={DetailNews} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
