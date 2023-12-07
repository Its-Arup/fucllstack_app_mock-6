import axios from "axios";
import {
    USERLOGINSUCCESS,
  USERREGISTERFALIURE,
  USERREGISTERREQUEST,
  USERREGISTERSUCCESS,
} from "./actionType";

const baseUrl = "http://localhost:4500/user";


export const registerUser = (payload) => (dispatch) => {
  dispatch({ type: USERREGISTERREQUEST });
  return axios
    .post(`${baseUrl}/register`, payload)
    .then((res) => {
      dispatch({ type: USERREGISTERSUCCESS, payload: res.data.user });
      return res.data;
    })
    .catch((err) => {
      dispatch({ type: USERREGISTERFALIURE });
    });
};


export const loginUser =(payload) => (dispatch) => {
    dispatch({type : USERREGISTERREQUEST})
    return axios.post(`${baseUrl}/login`, payload)
    .then((res) => {
      localStorage.setItem("token", res.data.token)
      dispatch({type : USERLOGINSUCCESS , payload : res.data.token})
      console.log(res.data.token)
        return res.data;
    })
    .catch((err)=>{
        console.log(err.message);
    })
}

