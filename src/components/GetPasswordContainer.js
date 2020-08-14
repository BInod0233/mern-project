import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPassword } from "../redux";
import { Table } from "react-bootstrap";

function GetPasswordContainer(props) {
  // const user_id = useSelector((state) => state.user.userDetails.userid);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPassword());
  });
  const allPassword = useSelector((state) => state.password.allPassword);
  // console.log(allPassword);
  if (allPassword) {
    var CatData = allPassword.map((val, i) => (
      <tr key={i}>
        <td key={val._id}>{i + 1}</td>
        {/* <td>{val.password_category.password_category}</td> */}
        <td>{val.project_name}</td>
        <td>{val.password_detail}</td>
      </tr>
    ));
  } else {
    CatData = (
      <tr>
        <td colSpan="4"> No Records Found </td>
      </tr>
    );
  }

  // const editPassword = (id, category) => {
  //   dispatch(editPassword(id, category));
  // };

  // const deletePassword = (id) => {
  //   dispatch(deletePassCat(id));
  // };
  // console.log(allPassword);
  return (
    <div>
      <h1> All Passsword Category </h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th> # </th> <th> Category ID </th> <th> Category Name </th>
            <th> project detail </th> <th> Action </th>
          </tr>
        </thead>
        <tbody>{CatData}</tbody>
      </Table>
    </div>
  );
}

export default GetPasswordContainer;
