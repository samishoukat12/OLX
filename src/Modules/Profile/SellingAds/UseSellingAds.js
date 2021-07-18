// import { getUserId } from '../../redux/actions/UserActions';
import {useDispatch} from 'react-redux';
import {useState,useEffect} from 'react';
// import {deleteProduct} from '../../redux/actions/ProductsAction';
export function UseSellingAds () {
    const[uid,setUid]=useState('');
    const dispatch=useDispatch();
    


    // function deleteHandler(docId){
    //     window.confirm("Are you sure you want to delete your product?")
    //     dispatch(deleteProduct(docId))  
    // }
   useEffect(() => {
    // dispatch(getUserId(setUid))
   }, [])
    return[uid]
}