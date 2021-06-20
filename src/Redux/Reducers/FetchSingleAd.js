import { Fetch_SINGLE_AD } from "../Types/Types";

let  initialState={
    error:"",
     CardsAds:[],
}


export default function FetchSingleAdReducer(state=initialState,action){
   switch (action.type) {
       case Fetch_SINGLE_AD:
           let newState={
               CardsAds:action.playload,
           }
           return newState;
   
       default:
         return state;
   }
}