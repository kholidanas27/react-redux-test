import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const columns = [
  {
    dataField: "userId",
    text: "ID",
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "id",
    text: "User",
  },
  {
    dataField: "title",
    text: "Title",
  },
  {
    dataField: "body",
    text: "Body",
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faInfo} /> Detail
          </Button>

          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faEdit} /> Edit
          </Button>

          <Button color="dark" className="mr-2">
            <FontAwesomeIcon icon={faTrash} /> Delete
          </Button>
        </div>
      );
    },
  },
];

const TableComponent = (props) => {
  return (
    <Container>
      <BootstrapTable keyField="id" data={props.content} columns={columns} />
    </Container>
  );
};

export default TableComponent;
