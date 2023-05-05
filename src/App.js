import logo from "./logo.svg";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Contacts from "./Contacts";
import AddUserContact from "./AddUserContact";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          name: "baba kojo",
          number: "0244205567",
          location: "Accra",
        },
        {
          name: "tunde kwesi",
          number: "023376533",
          location: "Tamale",
        },
        {
          name: "kofi yaayi",
          number: "037353363",
          location: "Akosombo",
        },
      ],
    };
  }

  addNewContact = (contact) => {
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <AddUserContact addContact={this.addNewContact} />
            </Col>
            <Col>
              <Contacts contactsData={this.state.contacts} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
