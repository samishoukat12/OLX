import React,{useState} from 'react'
const initialData=[
    {
      Name:"sami",
    }
    ]
export default function useAddItem() {
    const [Students,setStudents]=useState(initialData)
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Title, setTitle] = useState("");
    const [Price, setPrice] = useState("");
    const [Type, setType] = useState("");
    const [City, setCity] = useState("");
    const [State, setState] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    const [Address, setAddress] = useState("");
    const [Description, setDescription] = useState("");
    const [Image, setImage] = useState("");
    const ctaHandler=()=>{
      if(Name!==""&& Email!==""&& Title!=="" && Price!==""){
          let StudentList={
            Name,
              Email,
              Title,
              Price
          }
          console.log("studentList",StudentList);
          setStudents([...Students,StudentList])
          setName("")
          setEmail("")
          setTitle("")
          setPrice("")
         
      }
      else {
          // setErrorName("fill Name entries")
          // setErrorEmail("fill Email entries")
          // setErrorId("fill Id entries")
          // setErrorRoll("fill Roll entries")
      }
      }
      return[Name,Email,Title,Price,Type,City,Students,State,PhoneNumber,Address,Description,Image,setName,setEmail,setTitle,setPrice,setType,setCity,setState,setPhoneNumber,setAddress,setDescription,setImage,ctaHandler]

     
}
