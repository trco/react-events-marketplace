import React from 'react';
import { Link } from 'react-router-dom';

class CustomNavbar extends React.Component {

  render() {
    return (
      <div>
        <Link to="/">react-events-marketplace</Link>
        <br/>
        <Link to="/create">Create event</Link>
      </div>
    );
  }
}

export default CustomNavbar;
