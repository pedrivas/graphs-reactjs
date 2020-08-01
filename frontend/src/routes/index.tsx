import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/:xaxis/:yaxis" component={Home}/>
  </Switch>
)

export default Routes;