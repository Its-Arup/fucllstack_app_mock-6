import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const auth = useSelector((store) => {
    return store.userReducer.token;
  });

  return <div>{auth ? children : <Navigate to={"/Signin"} />}</div>;
}

export default PrivateRoute;
