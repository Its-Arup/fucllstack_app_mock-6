import {
  USERLOGINSUCCESS,
  USERREGISTERFALIURE,
  USERREGISTERREQUEST,
  USERREGISTERSUCCESS,
} from "./actionType";

const initState = {
  isLoding: false,
  isError: false,
  isAuth: false,
  token: localStorage.getItem("token") || "",
  user: {},
};

export const reducer = (state = initState, { type, paylaod }) => {
  switch (type) {
    case USERREGISTERREQUEST:
      return {
        ...state,
        isLoding: true,
      };
    case USERREGISTERSUCCESS:
      return {
        ...state,
        isLoding: false,
        isError: false,
        isAuth: true,
        user: paylaod,
      };
    case USERREGISTERFALIURE:
      return {
        ...state,
        isLoding: false,
        isError: true,
      };
    case USERLOGINSUCCESS :
      return {
        ...state,
        isLoding: false,
        isError: false,
        isAuth: true,
        token : paylaod
      }
    default:
      return state;
  }
};
