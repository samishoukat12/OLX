import { getUserId } from '../../Redux/Actions/AddUserItemAction';
import {useDispatch, useSelector} from 'react-redux';
import {useState,useEffect} from 'react';
import { FetchAdsAction } from '../../Redux/Actions/FetchAdsAction';
// import {deleteProduct} from '../../redux/actions/ProductsAction';
export function UseMyAds () {
    const[Loading,setLoading]=useState("")
    const dispatch=useDispatch();
    const CardsAds = useSelector(store => store.FetchReducer.CardsAds)
    console.log(CardsAds);
    useEffect(() => {
       dispatch(FetchAdsAction(setLoading))
    }, [])
    


    // function deleteHandler(docId){
    //     window.confirm("Are you sure you want to delete your product?")
    //     dispatch(deleteProduct(docId))  
    // }
    
    return[CardsAds,Loading]
}