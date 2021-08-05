import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInfo,
  faEdit,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Swal from "sweetalert2";
import { deleteUser } from "../action/userAction";

const { SearchBar } = Search;

const handleClick = (dispatch, id) => {
  const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: 'Apakah anda yakin ingin menghapus data ini?',
  text: "Anda tidak akan dapat mengembalikan data ini!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Hapus Data ',
  cancelButtonText: 'Batal',
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    dispatch(deleteUser(id))
    swalWithBootstrapButtons.fire(
      'Terhapus!',
      'Data anda telah dihapus.',
      'success'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Batal',
      'Data anda tetap aman :)',
      'error'
    )
  }
})
}

const mapStateToProps = (state) => {
  return { 
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList 
  }
}

const TableComponent = (props) => {
  const columns = [
  {
    dataField: "userId",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "id",
    text: "User",
    sort: true,
  },
  {
    dataField: "title",
    text: "Title",
    sort: true,
  },
  {
    dataField: "body",
    text: "Body",
    sort: true,
  },
  {
    dataField: "link",
    text: "Aksi",
        headerStyle: () => {
      return { width: "30%" };
    },
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.userId}>
            <Button color="secondary" className="mr-2">
              <FontAwesomeIcon icon={faInfo} />Detail
            </Button>
          </Link>
          <Link to={"edit/" + row.userId}>
            <Button color="warning" className="mr-2">
              <FontAwesomeIcon icon={faEdit} />Edit
            </Button>
          </Link>
          <Button color="danger" className="mr-2" onClick={() => handleClick(props.dispatch, row.id)}>
            <FontAwesomeIcon icon={faTrash} />Hapus
          </Button>
        </div>
      );
    },
  },
];
const defaultSorted = [
  {
    dataField: "userId",
    order: "asc",
  },
];
  return (
    <Container>
      { props.getUsersList ? 
      <ToolkitProvider
        bootstrap4
        keyField="id"
        data={props.getUsersList}
        columns={columns}
        defaultSorted={defaultSorted}
        search
      >
        {(props) => (
          <div>
            <Row>
              <Col>
                <Link to="/create">
                  <Button color="primary" className="mr-2">
                    <FontAwesomeIcon icon={faUserPlus} /> Tambah Data
                  </Button>
                </Link>
              </Col>
              <Col>
                <div className="float-right">
                  <SearchBar {...props.searchProps} placeholder="Cari .." />
                </div>
              </Col>
            </Row>
            <hr />
            <BootstrapTable
              {...props.baseProps}
              pagination={paginationFactory()}
            />
          </div>
        )}
      </ToolkitProvider> : 
      ( 
      <div className="text-center">
        { props.errorUsersList ? <h3>{props.errorUsersList}</h3> : <Spinner color="blue" /> }
      </div> 
      )}
    </Container>
  );
};

export default connect(mapStateToProps, null)(TableComponent);
