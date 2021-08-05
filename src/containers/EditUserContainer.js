import React, { Component } from "react";
import { connect } from "react-redux";
import { Container } from "reactstrap";
import BackComponent from "../components/BackComponent";
import FormComponent from "../components/FormComponent"; 
import { getUsersDetail, putUsersUpdate } from "../action/userAction";
import Swal from "sweetalert2";

const mapStateToProps = (state) => {
  return {
    getResponsDataUsers: state.users.getResponsDataUsers,
    errorResponsDataUsers: state.users.errorResponsDataUsers,
  };
};

class EditUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id))
  }

  handleSubmit(data) {
    this.props.dispatch(putUsersUpdate(data, this.props.match.params.id));
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
            "Users Update!",
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
        <h1>Edit User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)}/>
      </Container>
    );
  }
}
export default connect(mapStateToProps, null)(EditUserContainer);