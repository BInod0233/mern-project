import React from "react";
import { Provider } from "react-redux";
import MainContainer from "./components/MainContainer";
import setAuthToken from "./redux/action/setAuth";
import jwt from "jsonwebtoken";
import store from "./redux/store";
import "./App.css";
import { setCurrentUser, logout } from "./redux";

function App() {
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    jwt.verify(localStorage.jwtToken, "secret", function (err, decode) {
      if (err) {
        store.dispatch(logout());
      } else {
        store.dispatch(setCurrentUser(decode));
      }
    });
  }
  return (
    <Provider store={store}>
      <div className="App">
        <MainContainer />
      </div>
    </Provider>
  );
}

export default App;
