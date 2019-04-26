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

  render() {
    const events = this.state.events;
    return (
      events.map((event) => <Event data={event} key={event.id} />)
    );
  }
}

export default Events;

const Event = ({ data }) => {
  return (
    <div key={data.id}>
      <Link to={`/event/${data.id}`}>{data.title}</Link>
      <Link to={`/update/${data.id}`}>Update</Link>
    </div>
  );
}
