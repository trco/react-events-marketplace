import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Router from './routes';
import CustomLayout from './containers/CustomLayout';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* BrowserRouter should wrap other elements */}
        <BrowserRouter>
          <CustomLayout>
            {/* Router evaluates all the routes in routes.js & renders the component related with the route we are on */}
            <Router />
          </CustomLayout>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
