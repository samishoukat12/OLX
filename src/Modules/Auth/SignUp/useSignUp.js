import {useState} from "react"
import { useDispatch } from 'react-redux'
import { doSignUp } from '../../../Redux/Actions/Actions'
import toast, { Toaster } from 'react-hot-toast';
export  function useSignUp() {
   const[email,setEmail]=useState("")
   const [password,setPassword]=useState("")
   const[number,setNumber]=useState("")
   const [cnic,setCnic]=useState("")
   const[error,setError]=useState("")
   const[Confirmpassword,setConfirmpassword]=useState("")
   const dispatch = useDispatch()
   const Toast=toast.error("Please Fill All Entries")
   const doSignupUser=()=>{
       let user={
           email,
           password,
           Confirmpassword,
           number,
           cnic
          
       }
      
       dispatch(doSignUp(user))
       if(email===""||password===""||number===""|cnic===""){
           setError(<Toaster position="bottom-right" reverseOrder={true} />)
           
       }
       setEmail("")
       setPassword("")
       setNumber("")
       setCnic("")
       setConfirmpassword("")
       
   }
   return[password,email,cnic,number,error,setCnic,setNumber,setEmail,setPassword,doSignupUser,setConfirmpassword,Confirmpassword]
}
