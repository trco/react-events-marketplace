import React from 'react';
import axios from 'axios';

class EventForm extends React.Component {

  state = {
    event: {},
    eventID: 0,
    fields : {
      title: '',
    },
    fieldErrors: {}
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
            eventID: eventID,
            fields: res.data
          });
        });
    }
  };

  handleFormSubmit = () => {
    const requestMethod = this.state.eventID ? "put" : "post";
    console.log(requestMethod);

    switch (requestMethod) {
      case 'post':
        return axios.post('http://127.0.0.1:8000/api/', {
          title: this.state.fields.title
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
      case 'put':
        return axios.put(`http://127.0.0.1:8000/api/${this.state.eventID}/`, {
          title: this.state.fields.title
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  }

  onInputChange = ({ name, value, error }) => {
    const fields = Object.assign({}, this.state.fields);
    const fieldErrors = Object.assign({}, this.state.fieldErrors);

    fields[name] = value;
    fieldErrors[name] = error;

    this.setState({ fields, fieldErrors });
    console.log(this.state.fields);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <Field
            placeholder='Title'
            name='title'
            value={this.state.fields.title}
            // validate={value => value ? false : 'Title is required.'}
            onChange={this.onInputChange}
          />
          <input type='submit'/>
        </form>
      </div>
    );
  }
}

export default EventForm;

class Field extends React.Component {

  state = {
    value: this.props.value,
    error: false
  }

  // Enables clearing of the fields after successful submission
  static getDerivedStateFromProps(nextProps) {
    return { value: nextProps.value }
  }

  onChange = (evt) => {
    const name = this.props.name;
    const value = evt.target.value;
    const error = this.props.validate ? this.props.validate(value) : false;

    this.setState({ value, error });

    // Pass values to the form onInputChange
    this.props.onChange({ name, value, error });
  }

  render() {
    return (
      <>
        <input
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.onChange}
        />
        <span style={{ color: 'red' }}>{this.state.error}</span>
      </>
    )
  }
}
