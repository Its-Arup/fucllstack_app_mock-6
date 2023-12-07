import axios from "axios";
import {
  CREATE_BLOG_FAIL,
  CREATE_BLOG_REQ,
  CREATE_BLOG_SUCC,
} from "./actionType";

const baseUrl = "http://localhost:4500/blog";

export const createBlog = (payload) => (dispatch) => {
  dispatch({ type: CREATE_BLOG_REQ });
  axios({
    method: "POST",
    url: `${baseUrl}/blogs`,
    data: payload,
  })
    .then((res) => {
      dispatch({ type: CREATE_BLOG_SUCC, payload: res.data.data });
    })
    .catch((err) => {
      dispatch({ type: CREATE_BLOG_FAIL });
    });
};
