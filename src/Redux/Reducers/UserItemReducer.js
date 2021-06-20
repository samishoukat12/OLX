import { FETCH_USER_ITEM ,ADD_USER_ITEM, DELETE_USER_ITEM} from "../Types/Types";

let initialState = {
    UserProfile: [],
  error: "",

}
export default function UserItemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER_ITEM:
      let newuser = state.UserProfile;
      newuser.push(action.payload)
      return {
        ...state,
        UserProfile: newuser,
      };
    case DELETE_USER_ITEM:
      return {
        userSalesImage: action.payload,
      }
      case FETCH_USER_ITEM:
        console.log("data in reducer from fetch action", action.payload);
        // work  / logic will be her
        return {
          ...state,
          UserProfile: action.payload,
        };
    //   }
    // case ADD_STUDENT:
    //   console.log("data in reducer from action", action.payload);
    //   // work  / logic will be her
    //   let newuser = state.user;
    //   newuser.push(action.payload)
    //   return {
    //     ...state,
    //     user: newuser
    //   };




    default:
      return { ...state }
  }
}