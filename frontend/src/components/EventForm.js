import React from 'react';
import axios from 'axios';

class EventForm extends React.Component {

  state = {
    eventId: null,
    fields : {
      title: '',
      description: ''
    },
    fieldsErrors: {},
    formIsValid: false
  }

  componentDidMount() {
    // Match is passed to this.props from <Route />
    // Params contains the dynamic parts of the route's path as key/value pairs
    const eventId = this.props.match.params.eventId;
    if (eventId ) {
      axios.get(`http://127.0.0.1:8000/api/${eventId}/`)
        .then(res => {
          this.setState({
            eventId: eventId,
            fields: res.data
          });
        });
    }
  };

  validate = () => {
    const fieldsErrors = this.state.fieldsErrors;
    // Check keys in fieldsErrors & construct new array if key has value
    const errMessages = Object.keys(fieldsErrors).filter((key) => fieldsErrors[key]);

    if (!this.state.fields.title) return true;
    if (!this.state.fields.description) return true;
    // Check if errors present
    if (errMessages.length) return true;

    return false;
  }

  handleFormSubmit = (evt) => {
    const requestMethod = this.state.eventId ? "put" : "post";

    switch (requestMethod) {
      case 'post':
        return axios.post('http://127.0.0.1:8000/api/', {
          title: this.state.fields.title,
          description: this.state.fields.description
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
      case 'put':
        return axios.put(`http://127.0.0.1:8000/api/${this.state.eventId}/`, {
          title: this.state.fields.title,
          description: this.state.fields.description
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  }

  onChange = ({ name, value, error }) => {
    const fields = Object.assign({}, this.state.fields);
    const fieldsErrors = Object.assign({}, this.state.fieldsErrors);

    fields[name] = value;
    fieldsErrors[name] = error;

    this.setState({
      fields,
      fieldsErrors
    });
  }

  validateTitle = (value) => {
    if (value.length < 4 && value.length !== 0)
      return 'Title should be at least 4 characters long.';
    if (!value)
      return 'Title is required.';
    return false;
  }

  validateDescription = (value) => {
    if (value.length < 4 && value.length !== 0)
      return 'Description should be at least 4 characters long.';
    if (!value)
      return 'Description is required.';
    return false;
  }

  render() {
    return (
      <div>
        <h1>{this.state.eventId ? "Update event" : "Create event"}</h1>
        <form onSubmit={this.handleFormSubmit}>
          <Field
            placeholder='Title'
            name='title'
            value={this.state.fields.title}
            error={this.state.fieldsErrors.title}
            validate={this.validateTitle}
            onChange={this.onChange}
          />
          <br/>
          <Field
            placeholder='Description'
            name='description'
            value={this.state.fields.description}
            error={this.state.fieldsErrors.description}
            validate={this.validateDescription}
            onChange={this.onChange}
          />
          <br/>
          <input type='submit' disabled={this.validate()} />
        </form>
      </div>
    );
  }
}

export default EventForm;

// Controlled component: value is saved in state everytime it changes
class Field extends React.Component {

  state = {
    value: this.props.value,
    error: this.props.error
  }

  // Enables clearing of the fields after successful submission
  static getDerivedStateFromProps(nextProps) {
    return { value: nextProps.value }
  }

  onChange = (evt) => {
    const name = this.props.name;
    const value = evt.target.value;
    // Validate field when changed
    const error = this.props.validate ? this.props.validate(value) : false;
    // Pass values to the form onChange and build fieldsErrors
    this.props.onChange({ name, value, error });

    this.setState({ value, error });
  }

  render() {
    return (
      <>
        <input
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.onChange}
        />
        <span style={{ color: 'red' }}>
          {this.state.error}
        </span>
      </>
    )
  }
}
