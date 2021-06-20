import { combineReducers } from "redux";
import FetchReducer from "./Reducers/FetchReducer"
import FetchSingleAdReducer from "./Reducers/FetchSingleAd"
import AuthReducer from "./Reducers/AuthReducer"
import FetchProfileReducer from "./Reducers/FetchProfileReducer"
import UserItemReducer from "./Reducers/UserItemReducer";
const rootReducer = combineReducers({
    FetchReducer,
    FetchSingleAdReducer,
    AuthReducer,
    FetchProfileReducer,
    UserItemReducer


});
export default rootReducer;