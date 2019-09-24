import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Serious from "../containers/Serious";
import SingleSerious from "../containers/SingleSerious";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Serious}/>
      <Route path="/serious/:id" component={SingleSerious}/>
    </Switch>
  );
};

export default Main;