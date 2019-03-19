import React from 'react';
import { Route } from 'react-router-dom';
import { Row } from 'reactstrap';

import EventListView from './containers/EventListView';
import EventDetailView from './containers/EventDetailView';

const Router = () => (
  <Row>
    <Route exact path='/' component={EventListView} />
    <Route exact path='/event/:eventID' component={EventDetailView} />
  </Row>
);

export default Router;
