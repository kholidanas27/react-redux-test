import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col } from "reactstrap";
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
const { SearchBar } = Search;
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
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.userId}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faInfo} /> Detail
            </Button>
          </Link>
          <Link to={"edit/" + row.userId}>
            <Button color="dark" className="mr-2">
              <FontAwesomeIcon icon={faEdit} /> Edit
            </Button>
          </Link>
          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faTrash} /> Delete
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

const TableComponent = (props) => {
  return (
    <Container>
      <ToolkitProvider
        bootstrap4
        keyField="id"
        data={props.content}
        columns={columns}
        defaultSorted={defaultSorted}
        search
      >
        {(props) => (
          <div>
            <Row>
              <Col>
                <Link to="/create">
                  <Button color="dark" className="mr-2">
                    <FontAwesomeIcon icon={faUserPlus} /> Create User
                  </Button>
                </Link>
              </Col>
              <Col>
                <div className="float-right">
                  <SearchBar {...props.searchProps} placeholder="Search .." />
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
      </ToolkitProvider>
    </Container>
  );
};

export default TableComponent;
