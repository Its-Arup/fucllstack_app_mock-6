import {thunk} from "redux-thunk"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as userReducer } from "./userReducer/reducer";
const rootReducer = combineReducers({
    userReducer
});

export const Store = legacy_createStore(rootReducer, applyMiddleware(thunk));
