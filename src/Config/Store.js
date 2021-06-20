import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Redux/rootReducer"
// import FetchReducer from "../Redux/Store/Reducers/FetchReducer"
const Store = createStore(rootReducer, applyMiddleware(thunk));
export default Store;