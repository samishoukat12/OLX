import { FETCH_ADS } from "../Types/Types";

let initialState = {
    error: "",
    CardsAds: [],
    FetchTime: new Date()
}

export default function FetchReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ADS:
            console.log("data reducer from Fetch action", action.payload);

            let newState = {
                ...state,
                CardsAds: action.payload,
            }
            return newState


        default:
            return state;
    }
}