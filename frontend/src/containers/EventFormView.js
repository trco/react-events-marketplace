import React from 'react';
import axios from 'axios';
import { Col } from 'reactstrap';

import EventForm from '../components/EventForm';

class EventFormView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      event: {},
      eventID: 0
    };
  }

  componentDidMount() {
    // match is passed to this.props from <Route />
    // params contains the dynamic parts of the route's path as key/value pairs
    const eventID = this.props.match.params.eventID;
    if (eventID) {
      axios.get(`http://127.0.0.1:8000/api/${eventID}/`)
        .then(res => {
          this.setState({
            event: res.data,
            eventID: eventID
          });
        });
    }
  };

  render() {
    return (
      <>
        <Col xs="12" md="6">
          <h2>{this.state.eventID ? "Update" : "Create"} Event</h2>
          <EventForm
            requestMethod={this.state.eventID ? "put" : "post"}
            event={this.state.eventID ? this.state.event : null}
            eventID={this.state.eventID ? this.state.eventID : null}
            btnText={this.state.eventID ? "Update" : "Create"}
          />
        </Col>
      </>
    );
  }
}

export default EventFormView;
