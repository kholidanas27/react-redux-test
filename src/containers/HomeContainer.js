import React, { Component } from 'react';
import TableComponent from '../components/TableComponent';
import { connect } from 'react-redux';
import { deleteDataUsers, getUsersList } from '../action/userAction';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUsers());
  }
  render() {
    return (
      <div>
        <TableComponent />
      </div>
    );
  }
}
export default connect()(HomeContainer);