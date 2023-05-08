import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export class EditContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.contactInfo.name,
      number: props.contactInfo.number,
      location: props.contactInfo.location,
      id: props.contactInfo.id,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editContact(this.state.id, this.state);
    console.log("form submit", this.state);
    this.setState({
      name: "",
      number: "",
      location: "",
    });

    this.props.closeModal();
  };

  render() {
    return (
      <div style={{ backgroundColor: "#3c8fcf", color: "white" }}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted"></Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Number:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Number"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicGen">
            <Form.Label>Location:</Form.Label>
            <Form.Control
              type="location"
              placeholder="Location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button variant="light">Submit</Button>
        </Form>
      </div>
    );
  }
}

export default EditContactForm;
