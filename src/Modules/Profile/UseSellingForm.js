import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { AddUserItemAction, getUid, UpdateProductDataWithoutImageFile } from '../../Redux/Actions/AddUserItemAction';
const ListOfCities = [
    "AhmadpurEast",
    "AhmedNagerChatha",
    "AliKhanAbad",
    "Alipur",
    "Arifwala",
    "Attock",
    "Bhera",
    "Bhalwal",
    "Bahawalnagar",
    "Bahawalpur",
    "Bhakkar",
    "Burewala",
    "Chillianwala",
    "Chakwal",
    "Chichawatni",
    "Chiniot",
    "Chishtian",
    "Daska",
    "DaryaKhan",
    "DeraGhaziKhan",
    "Dhaular",
    "Dina",
    "Dinga",
    "Dipalpur",
    "Faisalabad",
    "FatehJang",
    "GhakharMandi",
    "Gojra",
    "Gujranwala",
    "Gujrat",
    "GujarKhan",
    "Hafizabad",
    "Haroonabad",
    "Hasilpur",
    "HaveliLakha",
    "JalalpurJattan",
    "Jampur",
    "Jaranwala",
    "Jhang",
    "Jhelum",
    "Kalabagh",
    "KarorLalEsan",
    "Kasur",
    "Kamalia",
    "Kāmoke",
    "Khanewal",
    "Khanpur",
    "Kharian",
    "Khushab",
    "KotAdu",
    "Jauharabad",
    "Lahore",
    "Lalamusa",
    "Layyah",
    "LiaquatPur",
    "Lodhran",
    "Malakwal",
    "Mamoori",
    "Mailsi",
    "MandiBahauddin",
    "MianChannu",
    "Mianwali",
    "Multan",
    "Murree",
    "Muridke",
    "MianwaliBangla",
    "Muzaffargarh",
    "Narowal",
    "Okara",
    "RenalaKhurd",
    "Pakpattan",
    "Pattoki",
    "PirMahal",
    "Qaimpur",
    "QilaDidarSingh",
    "Rabwah",
    "Raiwind",
    "Rajanpur",
    "RahimYarKhan",
    "Rawalpindi",
    "Sadiqabad",
    "Safdarabad",
    "Sahiwal",
    "SanglaHill",
    "SaraiAlamgir",
    "Sargodha",
    "Shakargarh",
    "Sheikhupura",
    "Sialkot",
    "Sohawa",
    "Soianwala",
    "Siranwali",
    "Talagang",
    "Taxila",
    "TobaTekSingh",
    "Vehari",
  ];

export  function UseSellingForm() {
    const[ProductsData,setProductsData]=useState("")
   const [Title, setTitle] = useState("")
   const[Description,setDescription]=useState("")
   const[Price,setPrice]=useState("")
   const [Cities, setCities] = useState("");
   const [Category, setCategory] = useState("")
   const[file,setFile]=useState("");
   const[image,setImage]=useState("");
   const [Loading,setLoading]=useState()
   const [Url, setUrl] = useState("")
   const [FileName, setFileName] = useState("")
   const [number, setNumber] = useState("")
   const [UserId, setUserId] = useState("")
const dispatch = useDispatch()
useEffect(()=>{
  dispatch(getUid(setUserId));
  setNumber(Math.random()*100000000);
},[]);

 const handleChange=(e)=>{
  setFile(e.target.files[0])
    setFileName(e.target.files[0].name+number)
}

const ctapostHandler=(e)=>{
  if(Title!==""&&Description!=="" && Price!=="" && Cities !=="" && Category!==""){
    let productData={
        Title,
        Description,
        Price,
        Cities,
        Category,
        image,
        UserId,
    }
    setProductsData({...ProductsData},productData)
    dispatch(AddUserItemAction(productData,setLoading,FileName,file,setUrl,Url,setFile,setImage,image,Cities,Category,Loading,Price,ProductsData,Title,Description))
    
  }
  setTitle("")
  setPrice("")
  setDescription("")
   setCities("")
   setCategory("")
}

   return[Title,Description,Price,Cities,Category,ProductsData,setTitle,setDescription,setPrice,setCities,setCategory,handleChange,ctapostHandler]
}
