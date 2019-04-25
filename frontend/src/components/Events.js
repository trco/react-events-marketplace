import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({ data }) => {
  return (
    <div key={data.id}>
      <Link to={`/event/${data.id}`}>{data.title}</Link>
      <Link to={`/update/${data.id}`}>Update</Link>
    </div>
  );
}

const Events = ({ data }) => {
  return (
    data.map(item => <Event data={item} key={item.id} />)
  );
}

export default Events;
