import React, { useState,useEffect } from "react";
import {useDispatch,useSelector} from "react-redux"
import Container from "@material-ui/core/Container";
import { Form, Col } from "react-bootstrap";
import Button from "@material-ui/core/Button"
import { AddUserItemAction, FetchProfileItemAction } from "../../../Redux/Actions/Actions";



let ListOfCities = [
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
const initialData=[
  {
    Name:"sami",
  }
  ]

export default function AddItemFields() {
//  const[Name,Email,Title,Price,Type,City,State,Students,PhoneNumber,Address,Description,Image,setName,setEmail,setTitle,setPrice,setType,setCity,ctaHandler,setState,setPhoneNumber,setAddress,setDescription,setImage]=useAddItem()

const [errorMessage, setMessage] = useState("");
    const [name, setName] = useState("")
    const [Title, setTitle] = useState("")
    const [Price, setPrice] = useState("")
    const [Description, setDescription] = useState("")
    const [flag, setFlag] = useState(false);
    const[FullName,setFullName]=useState("")
    const [updatedIndex, setUpdatedIndex] = useState(0)
    const [loading, setLoading] = useState(false);
    // const [ctaLoading, setCtaLoading] = useState(false);
    const [file, setFile] = useState(null);
    const [url, setURL] = useState("");
    const dispatch = useDispatch()
    function handleChange(e) {
        setFile(e.target.files[0]);
      }

    const handleUpload = (e) => {
        e.preventDefault();
    
        setMessage("")
        if (name !== "" && Title !== "" && Price !== "" && Description !==""&&FullName!=="") {
            let student = {
                name,
                Title,
                Price,
                Description,
                FullName,
                createdAt: new Date()
            }
            console.log("student for passing to actions, // call action to add new data in firebase", student);
            
            // call action to add new data in firebase
            // dispatch(addItemAction(student, setLoading))
            dispatch(AddUserItemAction(e,setFile,setURL,file,url,name,student,Title,Price,Description,FullName,setLoading))
            setName("");
            setPrice("");
            setDescription("");
            setTitle("");
            setFile("")
            setFullName("")

        }
        else {
            setMessage(" Found few of params empty! Params can't be empty.")
        }
    }
    const profile = useSelector(state => state.UserItemReducer.UserProfile)
    console.log("fetchprofile",profile);
    useEffect(() => {
      dispatch(FetchProfileItemAction(setLoading));
    }, [])
  return (
    <Container>
      <Form>
        {/* <Form.Row>
          <Form.Group as={Col} controlId="Name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          

          <Form.Group as={Col} controlId="Enter Email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="Email"
              placeholder="Enter Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
      
          <Form.Group as={Col} controlId="Enter Title">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Title"
              value={Title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
         
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="Price">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Price"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="Type/Category">
            <Form.Label>Type/Category</Form.Label>
            <Form.Control
              type="text"
              placeholder="Type/Category"
              value={Type}
              onChange={(e) => setType(e.target.value)}
            />
          </Form.Group>
        
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="City">
            <Form.Label>City</Form.Label>
            <Form.Control
              placeholder="City"
              value={City}
              onChange={(e) => setCity(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option value={State} onChange={(e) => setState(e.target.value)}>
                Choose...
              </option>
              {ListOfCities.map((cities) => {
                return <option>{cities}</option>;
              })}
            </Form.Control>
          
          </Form.Group>

          <Form.Group as={Col} controlId="Phone Number">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              placeholder="Phone Number"
              value={PhoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
         
        </Form.Row>
        <Form.Group as={Col} controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            placeholder="Address"
            value={Address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Form.Group>
    
        <Form.Group as={Col} controlId="Description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            placeholder="Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        
        <Form.Group as={Col}>
          {/* <UploadButton value={Image}  onChange={(e) => setImage(e.target.value)}/>
        <img src={Image} alt="" /> */}

           {/* <form action="/action_page.php">
            <input
              type="file"
              id="myFile"
              name="filename"
              value={Image}
              onChange={(e) => setImage(e.target.value)}
            />
          </form> */}
        {/* </Form.Group> */} 
        <form onSubmit={handleUpload}>
            <input type="text" value={name} name="name" placeholder="name" onChange={(e) => setName(e.target.value)} />
        <input type="text" value={FullName} placeholder="FullName" onChange={(e) => setFullName(e.target.value)} />

        <input type="text" value={Title} name="s" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={Price} placeholder="Price." onChange={(e) => setPrice(e.target.value)} />
        <input type="text" value={Description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
        <input type="file" onChange={handleChange} />
        {/* <button disabled={!file}>upload to firebase</button> */}
        {/* <button onClick={dleteUplaod}> delete</button> */}
      </form>
        {/* <Button onclick={ctaHandler}>submit</Button>  */}
         
        {/* <AcceptButton />  */}
        {/* <DummyTable Students={Students} setStudents={setStudents}/> */}
        <input type="submit" onClick={handleUpload}/>

{
   profile.map((items)=>{
     return(
        <>
         <img src={items.ProfilePhoto} style={{height:200,width:200}} alt="broken-img" />
         <p style={{fontSize:40}}>{items.Title}</p>
         <p style={{fontSize:40}}>{items.Price}</p>
         <p style={{fontSize:40}}>{items.Title}</p>
         <p style={{fontSize:40}}>{items.Description}</p>

  
         </>
     )
   }) 
}
      </Form> 
    </Container>
  );
}
