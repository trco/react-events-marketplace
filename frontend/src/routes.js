import React from 'react';
import { Route } from 'react-router-dom';
import { Row } from 'reactstrap';

import EventListView from './containers/EventListView';
import EventDetailView from './containers/EventDetailView';
import EventFormView from './containers/EventFormView';

const Router = () => (
  <Row>
    <Route exact path='/' component={EventListView} />
    <Route exact path='/event/:eventID' component={EventDetailView} />
    <Route exact path='/create' component={EventFormView} />
    <Route exact path='/update/:eventID' component={EventFormView} />
  </Row>
);

export default Router;
