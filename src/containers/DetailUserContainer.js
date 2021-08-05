import React, { Component } from "react";
import { Container, Button, Row, Col } from "reactstrap";
import BackComponent from "../components/BackComponent";

export default class DetailUserContainer extends Component {
  render() {
    return (
      <Container>
        <BackComponent />
        <div>User</div>
      </Container>
    );
  }
}
