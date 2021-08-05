import React from 'react'
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return { 
    getUsersDetail: state.users.getUsersDetail,
    errorUsersDetail: state.users.errorUsersDetail, 
  };
};

const DetailUserComponent = (props) => {
    return (
    <Table>
      <tbody>
        <tr>
          <td width="200">User Id</td>
          <td width="10">:</td>
          <td>{props.getUsersDetail.userId}</td>
        </tr>
        <tr>
          <td width="200">Id</td>
          <td width="10">:</td>
          <td>{props.getUsersDetail.id}</td>
        </tr>
        <tr>
          <td width="200">Title</td>
          <td width="10">:</td>
          <td>{props.getUsersDetail.title}</td>
        </tr>
        <tr>
          <td width="200">Body</td>
          <td width="10">:</td>
          <td>{props.getUsersDetail.body}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default connect(mapStateToProps, null)(DetailUserComponent);
