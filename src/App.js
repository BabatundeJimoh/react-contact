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
          id: "12w23319djdnf",
        },
        {
          name: "tunde kwesi",
          number: "023376533",
          location: "Tamale",
          id: "52543437hdhdd",
        },
        {
          name: "kofi yaayi",
          number: "037353363",
          location: "Akosombo",
          id: "6637892hhdh",
        },
      ],
    };
  }

  addNewContact = (contact) => {
    contact.id = Math.random().toString();
    this.setState({
      contacts: [...this.state.contacts, contact],
    });
  };

  deleteContact = (id) => {
    let undeletedContacts = this.state.contacts.filter(
      (contact) => contact.id !== id
    );
    this.setState({
      contacts: undeletedContacts,
    });
  };

  editContact = (id, updatedContact) => {
    this.setState({
      contacts: this.state.contacts.map((contact) =>
        contact.id === id ? updatedContact : contact
      ),
    });
  };

  render() {
    return (
      <>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <br />
              <h4 style={{ textAlign: "center" }}>Contact</h4>
              <p style={{ textAlign: "center" }}>Add new or existing contact</p>
              <AddUserContact addContact={this.addNewContact} />
            </Col>
            <Col>
              <h4 style={{ textAlign: "center" }}>Saved Contacts</h4>
              <br />
              <Contacts
                contactsData={this.state.contacts}
                deleteContact={this.deleteContact}
                editContact={this.editContact}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
