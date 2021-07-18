import { combineReducers } from "redux";
import FetchReducer from "./Reducers/FetchReducer"
import AuthReducer from "./Reducers/AuthReducer"

const rootReducer = combineReducers({
    FetchReducer,
    AuthReducer,


});
export default rootReducer;