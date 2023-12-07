import React from "react";
import { Route, Routes } from "react-router-dom";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import Blog from "../Pages/Blog";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Signin" element={<Signin />} />
      <Route path="/blogs" element={<Blog />} />
      {/* <Route path="/blogs" element={<PrivateRoute><Blog /></PrivateRoute>} /> */}
      {/* <Route path="/private" element={<PrivateRoute />} /> */}
    </Routes>
  );
}

export default AllRoutes;
