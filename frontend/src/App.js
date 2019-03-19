import React, { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import BaseRouter from './routes';

import CustomLayout from './containers/Layout';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout>
            {/* BaseRouter evaluates all the routes in routes.js & renders the component related with the route we are on */}
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}

export default App;
