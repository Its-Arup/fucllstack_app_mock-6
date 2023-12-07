import {thunk} from "redux-thunk"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as userReducer } from "./userReducer/reducer";
import { reducer as blogReducer} from "./BlogReducer/reducer";
const rootReducer = combineReducers({
    userReducer,
    blogReducer
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
