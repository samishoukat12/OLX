import { ALREADY_LOGIN, FACEBOOK_LOGIN, GOOGLE_LOGIN, LOGIN, LOGOUT } from "../Types/Types"
const initialState = {
    isUserLoggedIn: false,
    users: null
}
export default function AuthReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isUserLoggedIn: true,
                users: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                isUserLoggedIn: false,
                users: null
            }
            case GOOGLE_LOGIN:
                return{
                    ...state,
                isUserLoggedIn:true,
                users:action.payload
                }
            case FACEBOOK_LOGIN:
                return{
                    ...state,
                    isUserLoggedIn:true,
                    users:action.payload
                }

                case ALREADY_LOGIN:
                    return{
                        ...state,
                        isUserLoggedIn:true,
                        users:action.payload
                    }


        default:
            return state;
    }
}