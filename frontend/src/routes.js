import React from 'react';
import { Route } from 'react-router-dom';

import EventListView from './containers/EventListView';
import EventDetailView from './containers/EventDetailView';
import EventForm from './components/EventForm';

const Router = () => (
  <>
    <Route exact path='/' component={EventListView} />
    <Route exact path='/event/:eventID' component={EventDetailView} />
    <Route exact path='/create' component={EventForm} />
    <Route exact path='/update/:eventID' component={EventForm} />
  </>
);

export default Router;
