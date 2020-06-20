import { ADD_PASSWORD } from "./passwordType";
const axios = require("axios");

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
