import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class EventForm extends React.Component {

  handleFormSubmit = (event, requestMethod, eventID) => {
    const title = event.target.elements.title.value;

    switch (requestMethod) {
      case 'post':
        return axios.post('http://127.0.0.1:8000/api/', {
          title: title
        })
        .then(res => console.log(res))
        .catch(error => console.err(error));
      case 'put':
        return axios.put(`http://127.0.0.1:8000/api/${eventID}/`, {
          title: title
        })
        .then(res => console.log(res))
        .catch(error => console.err(error));
    }
  }

  render() {
    return (
      <Form onSubmit={(event) => this.handleFormSubmit(
        event,
        this.props.requestMethod,
        this.props.eventID
      )}>
        <FormGroup>
          <Label for="title">Title</Label>
          <Input
            type="text"
            name="title"
            id="id_title"
            placeholder="Title" />
        </FormGroup>
        <Button htmltype="submit">{this.props.btnText}</Button>
      </Form>
    );
  }
}

export default EventForm;
