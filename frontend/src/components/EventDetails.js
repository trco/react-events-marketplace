import React from 'react';
import axios from 'axios';

class EventDetails extends React.Component {

  state = {
    event: {}
  }

  componentDidMount() {
    // match is passed to this.props from <Route />
    // params contains the dynamic parts of the route's path as key/value pairs
    const eventId = this.props.match.params.eventId;
    axios.get(`http://127.0.0.1:8000/api/${eventId}/`)
      .then(res => {
        this.setState({
          event: res.data
        });
      });
  };

  handleDelete = (event) => {
    const eventId = this.props.match.params.eventId;
    axios.delete(`http://127.0.0.1:8000/api/${eventId}/`);
    this.props.history.push('/');
  }

  render() {
    const event = this.state.event;
    return (
      <div>
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        {/* <form onSubmit={this.handleDelete}>
          <Button htmltype="submit">Delete</Button>
        </form> */}
      </div>
    );
  }
}

export default EventDetails;
