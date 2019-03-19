import React from 'react';
import { Col } from 'reactstrap';
import axios from 'axios';

class EventDetailView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      event: {}
    };
  }

  componentDidMount() {
    // match is passed to this.props from <Route />
    // params contains the dynamic parts of the route's path as key/value pairs
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
