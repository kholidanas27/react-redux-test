import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postUsersCreate } from '../action/userAction';
import Swal from "sweetalert2";

const mapStateToProps = (state) => {
  return {
    getResponDataUsers: state.users.getResponDataUsers,
    errorResponDataUsers: state.users.errorResponDataUsers,
  };
};

class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUsersCreate(data));
  }
  render() {
    if (this.props.getResponDataUsers || this.props.errorResponDataUsers) {
      if(this.props.errorResponDataUsers)
      {
        Swal.fire(
            "Failed!",
            this.props.errorResponDataUsers,
            "error"
          );
      }else {
        Swal.fire(
            "Users Created!",
            "User Id : " +
              this.props.getResponDataUsers.userId +
              " , Id : " +
              this.props.getResponDataUsers.id,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateUserContainer);
