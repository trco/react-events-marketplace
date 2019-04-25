import React from 'react';
import { Route } from 'react-router-dom';

import EventListView from './containers/EventListView';
import EventDetailView from './containers/EventDetailView';
import Navbar from './components/Navbar';
import EventForm from './components/EventForm';

const App = () => (
  <div>
    <Navbar />
    <Route exact path='/' component={EventListView} />
    <Route exact path='/event/:eventID' component={EventDetailView} />
    <Route exact path='/create' component={EventForm} />
    <Route exact path='/update/:eventID' component={EventForm} />
  </div>
);

export default App;
