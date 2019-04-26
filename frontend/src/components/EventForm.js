import React from 'react';
import axios from 'axios';

class EventForm extends React.Component {

  state = {
    eventId: null,
    fields : {
      title: '',
    },
    fieldChanged: {},
    fieldErrors: {
      title: 'Title is required.',
    },
    submitted: false
  }

  componentDidMount() {
    // Match is passed to this.props from <Route />
    // Params contains the dynamic parts of the route's path as key/value pairs
    const eventId = this.props.match.params.eventId;
    if (eventId) {
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
    const fieldErrors = this.state.fieldErrors;
    // Check keys in fieldErrors & construct new array if key has value
    const errMessages = Object.keys(fieldErrors).filter((key) => fieldErrors[key]);

    // Check if errors present
    if (errMessages.length) return true;

    return false;
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();

    // Show fieldErrors if present
    if (this.validate()) {
      const fieldErrors = this.state.fieldErrors;
      this.setState({ fieldErrors, submitted: true });
      return;
    }

    const requestMethod = this.state.eventId ? "put" : "post";

    switch (requestMethod) {
      case 'post':
        return axios.post('http://127.0.0.1:8000/api/', {
          title: this.state.fields.title
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
      case 'put':
        return axios.put(`http://127.0.0.1:8000/api/${this.state.eventId}/`, {
          title: this.state.fields.title
        })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  }

  onInputChange = ({ name, value, error }) => {
    const fields = Object.assign({}, this.state.fields);
    const fieldChanged = Object.assign({}, this.state.fieldChanged);
    const fieldErrors = Object.assign({}, this.state.fieldErrors);

    fields[name] = value;
    fieldChanged[name] = true;
    fieldErrors[name] = error;

    this.setState({ fields, fieldChanged, fieldErrors });
  }

  validateTitle = (value) => {
    if (value.length < 7 && value.length != 0)
      return 'Title should be at least 8 characters long.';
    if (!value)
      return 'Title is required.';
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
            validate={this.validateTitle}
            onChange={this.onInputChange}
          />
          <span style={{ color: 'red' }}>{
            this.state.submitted || this.state.fieldChanged.title ?
            this.state.fieldErrors.title :
            false
          }</span>
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
    // Validate field when changed
    const error = this.props.validate ? this.props.validate(value) : false;
    // Pass values to the form onInputChange and build fieldErrors
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
      </>
    )
  }
}
