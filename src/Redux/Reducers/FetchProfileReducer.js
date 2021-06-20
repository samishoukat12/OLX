import { FETCH_PROFILE_INFO } from "../Types/Types";

let initialState = {
    error: "",
    users: [],
    FetchTime: new Date()
}

export default function FetchProfileReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PROFILE_INFO:
            console.log("data reducer from Fetch action", action.payload);

            let newState = {
                ...state,
                users: action.payload,
            }
            return newState


        default:
            return state;
    }
}