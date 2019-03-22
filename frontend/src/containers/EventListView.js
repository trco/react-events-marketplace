import React from 'react';
import axios from 'axios';

import Events from '../components/Events';

class EventListView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({
          events: res.data
        });
        console.log(res.data);
      })
  };

  render() {
    const events = this.state.events;
    return (
      <Events data={events} />
    );
  }
}

export default EventListView;
