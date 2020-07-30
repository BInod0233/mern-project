import {
  ADD_PASSWORD,
  FETCH_PASSWORD,
  EDIT_PASSWORD,
  UPDATE_PASSWORD,
} from "./passwordType";
const axios = require("axios");

export const fetchPassword = () => {
  return function (dispatch) {
    var OPTIONS = {
      url: "http://localhost:3001/api/getAllPasswords",
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTIONS)
      .then((res) => {
        const passcat = res.data.results;
        // console.log(passcat);
        dispatch(getPassword(passcat));
      })
      .catch((err) => console.log(err));
  };
};
export const getPassword = (categories) => {
  return {
    type: FETCH_PASSWORD,
    payload: categories,
  };
};
export const addPassword = (category, project_name, password_detail) => {
  return function (dispatch) {
    var OPTIONS = {
      url: "http://localhost:3001/api/add-new-password",
      method: "POST",
      data: {
        pass_cat: category,
        project_name: project_name,
        password_detail: password_detail,
      },
      headers: {
        "content-type": "application/json",
      },
    };

    axios(OPTIONS)
      .then((res) => {
        const message = res.data.message;
        dispatch({
          type: ADD_PASSWORD,
          payload: message,
        });
      })
      .catch((err) => console.log(err));
  };
};

export const editPassword = (id, categories) => {
  return {
    type: EDIT_PASSWORD,
    payload: categories,
    id: id,
  };
};

export const updatePassword = (id, category) => {
  var OPTIONS = {
    url: "http://localhost:3001/api/update-category",
    method: "PATCH",
    data: { _id: id, pass_cat: category },
    headers: {
      "content-type": "application/json",
    },
  };

  axios(OPTIONS)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

  return {
    type: UPDATE_PASSWORD,
    payload: category,
  };
};
