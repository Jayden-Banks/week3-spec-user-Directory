import { Switch, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Card } from "./components/card/Card";

export default (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/card" component={Card}/>
  </Switch>
)