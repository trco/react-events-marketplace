import React, { Component } from 'react';

import EventList from './containers/EventListView';
import CustomLayout from './containers/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomLayout>
          <EventList />
        </CustomLayout>
      </div>
    );
  }
}

export default App;
