import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import AddUser from './components/add_user';

export default (
  <Route >
    <IndexRoute component={App} />
    <Route path="/users/add" component={AddUser} />
    <Route path="/" component={App} />
  </Route>
);