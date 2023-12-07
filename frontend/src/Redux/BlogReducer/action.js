import axios from "axios";
import {
  CREATE_BLOG_FAIL,
  CREATE_BLOG_REQ,
  CREATE_BLOG_SUCC,
} from "./actionType";

// const baseUrl = "https://blog-app-llxp.onrender.com/blog";
const baseUrl = "http://localhost:4500/blog";

const token = localStorage.getItem("token") || null

export const createBlog = (payload) => (dispatch) => {
  dispatch({ type: CREATE_BLOG_REQ });
  axios({
    method: "POST",
    url: `${baseUrl}/blogs`,
    headers : {
      "Content-Type" : "application/json",
      authorization : `Bearer ${token}`
    },
    data: payload,
  })
    .then((res) => {
      console.log(res)
      dispatch({ type: CREATE_BLOG_SUCC, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: CREATE_BLOG_FAIL });
    });
};
