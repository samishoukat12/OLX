import { db } from "../../Config/Firebase"
import { FETCH_ADS } from "../Types/Types"

export const FetchAdsAction = (setLoading) => async (dispatch) => {
   
        try{
            setLoading(true);
            let fetchRes=await db.collection("CardsAds").get();
            const productsArray=[];
            fetchRes.forEach(doc => {
                productsArray.push({docId:doc.id,...doc.data()});
            });
            dispatch(
                {
                    type:FETCH_ADS,
                    payload:productsArray,
                }
            );
        }
        catch (error){
            console.log(error.message);
        }
        finally{
            setLoading(false)
       
    }
}