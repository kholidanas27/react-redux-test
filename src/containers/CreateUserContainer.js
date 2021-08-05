import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postUsersCreate } from '../action/userAction';

class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUsersCreate(data));
  }
  
  render() {
    return (
      <Container>
        <BackComponent />
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect()(CreateUserContainer);
