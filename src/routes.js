import React from 'react';
import { HashRouter as Router, 
        Redirect, 
        Route, } from "react-router-dom";

import c from './components';

const Routes = () => {
  return (
    <Router>
      <div>
      <Redirect from="/" to='/contacts' />
      <Route path='/contacts' component={c.Collection}>
        <Route path=':contactId' component={c.Show} />
      </Route>
      </div>
  </Router>
  )
}


export default Routes;