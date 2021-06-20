import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { FetchAdsAction } from "../Redux/Actions/Actions"
export function CustomHooks() {
   // const [Name, setName] = useState("")
   // const [Email, setEmail] = useState("")
   // const [Title, setTitle] = useState("")
   // const [Price, setPrice] = useState("")
   // const [Type, setType] = useState("")
   // const [City, setCity] = useState("")
   // const [State, setState] = useState("")
   // const [PhoneNumber, setPhoneNumber] = useState("")
   // const [Address, setAddress] = useState("")
   // const [Description, setDescription] = useState("")
   // const [Image, setImage] = useState("")


   // const[AdsTime,setTime]=useState(new Date())
   const dispatch = useDispatch()
   const [Loading, setLoading] = useState(false)
   const CardsAds = useSelector(store => store.FetchReducer.CardsAds)
   console.log(CardsAds);
   useEffect(() => {
      dispatch(FetchAdsAction(setLoading))
   }, [])

   return [CardsAds, Loading,
      // Name,
      // Email,
      // Title,
      // Price,
      // Type,
      // City,
      // State,
      // PhoneNumber,
      // Address,
      // Description,
      // Image,
      // setName,
      // setType,
      // setEmail,
      // setPrice,
      // setState,
      // setCity,
      // setAddress,
      // setDescription,
      // setImage,
      // setPhoneNumber,
      // setTitle,
   ]
}