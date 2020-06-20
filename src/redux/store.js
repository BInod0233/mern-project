import { createStore, applyMiddleware, combineReducers } from "redux";
import passReducer from "./reducer/passReducer";
import passwordReducer from "./reducer/passwordReducer";

import userReducer from "./reducer/userReducer";
const thunkMiddleware = require("redux-thunk").default;

const mainReducer = combineReducers({
  pass: passReducer,
  password: passwordReducer,

  user: userReducer,
});

const store = createStore(mainReducer, applyMiddleware(thunkMiddleware));

export default store;
