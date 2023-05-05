import React from "react";
import { Card, Col } from "react-bootstrap";

const Contact = (props) => {
  return (
    <Col md="3" style={{ color: "white" }}>
      <Card style={{ width: "13rem", backgroundColor: "#3c8fcf" }}>
        <Card.Img
          variant="top"
          src="data:image/png;base64,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"
          style={{ height: "8rem" }}
        />
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
          <Card.Text>
            <p>Name: {props.contactInfo.name}</p>
            <p>Number:{props.contactInfo.number}</p>
            <p>Location: {props.contactInfo.location}</p>
          </Card.Text>
          <Card.Link href="#" style={{ color: "white" }}>
            Edit
          </Card.Link>
          <Card.Link href="#" style={{ color: "white" }}>
            Delete
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Contact;
