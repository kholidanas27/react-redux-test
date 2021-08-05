import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { title: state.users.users };
};

const JumbotronComponent = (props) => {
  return (
    <Container>
      <Jumbotron>
        <h1 className="display-3">{props.title}</h1>
        <p className="lead">
          Ini adalah hasil tes React JS Programmer PT Majapahit Teknologi
          Nusantara
        </p>
        <hr className="my-2" />
        <p className="lead">
          <Button color="dark">
            <FontAwesomeIcon icon={faInfo} />
            Learn More
          </Button>
        </p>
      </Jumbotron>
    </Container>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponent);
