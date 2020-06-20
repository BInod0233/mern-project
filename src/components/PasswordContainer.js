import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchPassCat, editPassCat, deletePassCat } from "../redux";

import { addPassword } from "../redux";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
//import GetPassCatContainer from "./GetPassCatContainer";
function PasswordContainer(props) {
  const [category, setCategory] = useState("");
  const [project_name, setProject_name] = useState("");

  const [password_detail, setPassword_detail] = useState("");

  return (
    <Container>
      <Row>
        <Col>
          <h1>Add Password</h1>
          <Form className="form">
            <p>{props.msg}</p>
            <Form.Group controlId="formCategory1">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="text"
                defaultValue={props.category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formCategory2">
              <Form.Label>project_name</Form.Label>
              <Form.Control
                type="textbox"
                defaultValue={props.project_name}
                onChange={(e) => setProject_name(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formCategory3">
              <Form.Label>Password password_detail</Form.Label>
              <Form.Control
                type="textbox"
                defaultValue={props.password_detail}
                onChange={(e) => setPassword_detail(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              onClick={() =>
                props.addPassword(category, project_name, password_detail)
              }
            >
              ADD
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

const mapStatetoProps = (state) => {
  return {
    category: state.password.category,
    project_name: state.password.project_name,

    password_detail: state.password.password_detail,
    msg: state.password.msg,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    addPassword: function (category, project_name, password_detail) {
      dispatch(addPassword(category, project_name, password_detail));
    },
    // updateCat: function (id, category, user_id) {
    //   dispatch(updatePassCat(id, category, user_id));
    // },
  };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(PasswordContainer);
