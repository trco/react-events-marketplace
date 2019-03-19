import React from 'react';
import axios from 'axios';

import Event from '../components/Event'

class EventListView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/events/')
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
        events.map(item => <Event data={item} />)
    );
  }
}

export default EventListView;
