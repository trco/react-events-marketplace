import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Events extends React.Component {

  state = {
    events: []
  }

  componentDidMount() {
    axios.get('http://127.0.0.1:8000/api/')
      .then(res => {
        this.setState({
          events: res.data
        });
      })
  };

  handleDelete = (eventId) => {
    // Delete event from state
    this.deleteEvent(eventId);
    // Delete event from database
    axios.delete(`http://127.0.0.1:8000/api/${eventId}/`);
  }

  deleteEvent = (eventId) => {
    this.setState({
      events: this.state.events.filter((event) => event.id !== eventId)
    });
  }

  render() {
    const events = this.state.events;
    return (
      events.map((event) =>
        <Event
          data={event}
          key={event.id}
          handleDelete={this.handleDelete}
        />)
    );
  }
}

export default Events;

class Event extends React.Component {

  handleDelete = () => {
    const eventId = this.props.data.id;
    this.props.handleDelete(eventId);
  }

  render() {
    const data = this.props.data;
    return (
      <div key={data.id}>
        <Link to={`/event/${data.id}`}>{data.title}</Link>
        <Link to={`/update/${data.id}`}>Update</Link>
        <Link onClick={this.handleDelete}>Delete</Link>
      </div>
    );
  }
}
