import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import { postUsersCreate } from '../action/userAction';
import Swal from "sweetalert2";

const mapStateToProps = (state) => {
  return {
    getResponsDataUsers: state.users.getResponsDataUsers,
    errorResponsDataUsers: state.users.errorResponDataUsers,
  };
};

class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUsersCreate(data));
  }
  render() {
    if (this.props.getResponsDataUsers || this.props.errorResponsDataUsers) {
      if(this.props.errorResponsDataUsers)
      {
        Swal.fire(
            "Failed!",
            this.props.errorResponsDataUsers,
            "error"
          );
      }else {
        Swal.fire(
            "Users Created!",
            "User Id : " +
              this.props.getResponsDataUsers.userId +
              " , Id : " +
              this.props.getResponsDataUsers.id,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Tambah User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateUserContainer);
