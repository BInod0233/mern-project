import { ADD_PASSWORD } from "../action/passwordType";
const initialState = {
  category: "",
  project_name: "",
  password_detail: "",
  allCategories: [],
  action: "Add",
  id: "",
  msg: "",
};

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PASSWORD:
      return {
        ...state,
        msg: action.payload,
      };

    default:
      return state;
  }
};

export default passwordReducer;
