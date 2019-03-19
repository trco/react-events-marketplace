import React from 'react';
import axios from 'axios';
import { Col } from 'reactstrap';

import Events from '../components/Events';
import EventForm from '../components/EventForm';

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
      <>
        <Events data={events} />
        <Col xs="12" md="6">
          <h2>Create Event</h2>
          <EventForm
            requestMethod="post"
            eventID={null}
            btnText="Create"
          />
        </Col>
      </>
    );
  }
}

export default EventListView;
