import React from 'react';
import { Col, Button } from 'reactstrap';
import axios from 'axios';

import EventForm from '../components/EventForm';

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
    axios.get(`http://127.0.0.1:8000/api/${eventID}/`)
      .then(res => {
        this.setState({
          event: res.data
        });
      });
  };

  handleDelete = (event) => {
    const eventID = this.props.match.params.eventID;
    axios.delete(`http://127.0.0.1:8000/api/${eventID}/`);
    this.props.history.push('/');
  }

  render() {
    const event = this.state.event;
    return (
      <>
        <Col>
          <h1>{event.title}</h1>
          <p>{event.description}</p>
        </Col>
        <Col xs="12" md="6">
          <h2>Update Event</h2>
          <EventForm
            requestMethod="put"
            eventID={event.id}
            btnText="Update"
          />
          <form onSubmit={this.handleDelete}>
            <Button htmltype="submit">Delete</Button>
          </form>
        </Col>
      </>
    );
  }
}

export default EventDetailView;
