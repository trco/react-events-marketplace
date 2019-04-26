import React from 'react';
import { Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Events from './components/Events';
import EventDetails from './components/EventDetails';
import EventForm from './components/EventForm';

const App = () => (
  <div>
    <Navbar />
    <Route exact path='/' component={Events} />
    <Route exact path='/event/:eventId' component={EventDetails} />
    <Route exact path='/create' component={EventForm} />
    <Route exact path='/update/:eventId' component={EventForm} />
  </div>
);

export default App;
