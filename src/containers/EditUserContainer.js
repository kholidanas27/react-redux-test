import React, { Component } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import BackComponent from "../components/BackComponent";

export default class EditUserContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <div>Edit</div>
      </Container>
    );
  }
}
