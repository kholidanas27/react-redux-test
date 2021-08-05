import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";

export default class CreateUserContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <div>Create</div>
      </Container>
    );
  }
}
