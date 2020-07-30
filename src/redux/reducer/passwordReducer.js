import {
  ADD_PASSWORD,
  FETCH_PASSWORD,
  EDIT_PASSWORD,
  UPDATE_PASSWORD,
} from "../action/passwordType";
const initialState = {
  category: "",
  project_name: "",
  password_detail: "",
  allPassword: [],
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
    case FETCH_PASSWORD:
      return {
        ...state,
        allPassword: action.payload,
      };
    case EDIT_PASSWORD:
      return {
        ...state,
        category: action.payload,
        id: action.id,
        action: "Edit",
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        category: action.payload,
        msg: "Password Category Updated Successfully",
      };

    default:
      return state;
  }
};

export default passwordReducer;
