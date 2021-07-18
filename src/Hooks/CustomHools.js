import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { FetchAdsAction } from "../Redux/Actions/FetchAdsAction"
export function CustomHooks() {
   const dispatch = useDispatch()
   const [visible, setVisible] = useState(16);

    const loadMore = () =>{
        setVisible(preValue=> preValue+10);
    }
    return[visible,loadMore]
}