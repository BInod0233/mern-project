import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect, useSelector, useDispatch } from "react-redux";
import { fetchPassCat } from "../redux";
import FormikControl from "../formik/FormikControl";
import { addPassword } from "../redux";
//import { Container, Row, Col, Form, Button } from "react-bootstrap";
//import GetPassCatContainer from "./GetPassCatContainer";

function PasswordContainer(props) {
  const [category, setCategory] = useState("");
  const [project_name, setProject_name] = useState("");

  const [password_detail, setPassword_detail] = useState("");

  // return (
  //   <Container>
  //     <Row>
  //       <Col>
  //         <h1>Add Password</h1>
  //         <Form className="form">
  //           <p>{props.msg}</p>
  //           {/* <Form.Group controlId="formCategory1">
  //             <Form.Label>Category</Form.Label>
  //             <Form.Control
  //               type="text"
  //               defaultValue={props.category}
  //               onChange={(e) => setCategory(e.target.value)}
  //             />
  //           </Form.Group> */}
  //           <Form.Group controlId="exampleForm.ControlSelect1">
  //             <Form.Label>Example select</Form.Label>
  //             <Form.Control
  //               as="select"
  //               defaultValue={props.category}
  //               onChange={(e) => setCategory(e.target.value)}
  //             >
  //               <option>1</option>
  //               <option>2</option>
  //               <option>3</option>
  //               <option>4</option>
  //               <option>5</option>
  //             </Form.Control>
  //           </Form.Group>
  //           <Form.Group controlId="formCategory2">
  //             <Form.Label>project_name</Form.Label>
  //             <Form.Control
  //               type="textbox"
  //               defaultValue={props.project_name}
  //               onChange={(e) => setProject_name(e.target.value)}
  //             />
  //           </Form.Group>
  //           <Form.Group controlId="formCategory3">
  //             <Form.Label>Password password_detail</Form.Label>
  //             <Form.Control
  //               type="textbox"
  //               defaultValue={props.password_detail}
  //               onChange={(e) => setPassword_detail(e.target.value)}
  //             />
  //           </Form.Group>

  //           <Button
  //             variant="primary"
  //             onClick={() =>
  //               props.addPassword(category, project_name, password_detail)
  //             }
  //           >
  //             ADD
  //           </Button>
  //         </Form>
  //       </Col>
  //     </Row>
  //   </Container>
  // );

  const user_id = useSelector((state) => state.user.userDetails.userid);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPassCat(user_id));
  });
  const allCategories = useSelector((state) => state.pass.allCategories);

  const dropdownOptions = allCategories.map((val) => (
    <option key={val._id} value={val._id}>
      {val.password_category}
    </option>
  ));

  const initialValues = {
    // email: "",
    // description: "",
    // selectOption: "",
    // radioOption: "",
    // checkboxOption: [],
    // birthDate: null,
  };
  const validationSchema = Yup.object({
    //email: Yup.string().required("Required"),
    //description: Yup.string().required("Required"),
    // selectOption: Yup.string().required("Required"),
    //radioOption: Yup.string().required("Required"),
    // checkboxOption: Yup.array().required("Required"),
    //birthDate: Yup.date().required("Required").nullable(),
  });
  const onSubmit = (values) => {
    console.log("Form data", values);
    console.log("Saved data", JSON.parse(JSON.stringify(values)));
    props.addPassword(category, project_name, password_detail);
  };
  //console.log("on submmit data", onSubmit);
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <Field
            as="select"
            control="select"
            label="Select a topic"
            name="selectOption"
            defaultValue={props.category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {" "}
            {dropdownOptions}
          </Field>

          <FormikControl
            control="input"
            type="text"
            label="project name"
            name="email"
            defaultValue={props.project_name}
            onChange={(e) => setProject_name(e.target.value)}
          />
          <FormikControl
            control="input"
            type="textarea"
            label="project detail"
            name="text"
            defaultValue={props.password_detail}
            onChange={(e) => setPassword_detail(e.target.value)}
          />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
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
