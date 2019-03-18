import React, { Component } from 'react';
import { Col } from 'reactstrap';
import axios from 'axios';

class EventDetailView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      event: {}
    };
  }

  componentDidMount() {
    const eventID = this.props.match.params.eventID;
    axios.get(`http://127.0.0.1:8000/api/events/${eventID}/`)
      .then(res => {
        this.setState({
          event: res.data
        });
      })
  };

  render() {
    const event = this.state.event;
    return (
      <Col>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
      </Col>
    );
  }
}

export default EventDetailView;
