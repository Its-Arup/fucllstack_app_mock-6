import { CREATE_BLOG_FAIL, CREATE_BLOG_REQ, CREATE_BLOG_SUCC } from "./actionType";

const initState = {
  isLoding: false,
  isError: false,
  blogs: [],
};

export const reducer = (state = initState, { type, payload }) => {
    switch(type){
        case CREATE_BLOG_REQ :
            return {
                ...state,
                isLoding : true
            }
        case CREATE_BLOG_SUCC :
            return {
                ...state,
                isLoding : false,
                isError : false,
                blogs : [...state.blogs, payload]
            }
        case CREATE_BLOG_FAIL :
            return {
                ...state,
                isLoding : false,
                isError : true,
            }
        default :
        return state
    }
};
