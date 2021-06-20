import { Container, Button, Typography } from "@material-ui/core"
import EmailIcon from '@material-ui/icons/Email';
import { Link } from "react-router-dom"
import "./LoginPage.css"
import { TextField } from "@material-ui/core";
import { UseLogin } from "./UseLogin"
import { useDispatch } from "react-redux";
import FacebookIcon from '@material-ui/icons/Facebook';
import { LoginWithFacebook, LoginWithGoogle } from "../../../Redux/Actions/Actions";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useHistory } from "react-router-dom";


export default function LoginPage() {
  const [email,,password,Loading,setEmail,setPassword,doLoginUser,setLoading]= UseLogin()
  const dispatch = useDispatch()
  let history = useHistory();
  const GoogleLogin=()=>{
    dispatch(LoginWithGoogle(setLoading))
    history.push("/profile");
  }
  const FacebookLogin=()=>{
    dispatch(LoginWithFacebook())
    history.push("/profile");
  }
  return (
    <>
      <Container>



        <center>
          <Container className="Container">
            <Typography className="LoginText">Login</Typography>
            <div className="textFields">
              <TextField id="Email" type="email" required="bool" label="Email" fullWidth="bool" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="textFields">
              <TextField id="Password" type="password" required="bool" label="Password" fullWidth="bool" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="createAcc">
              <Link to="/SignUp" className="createAcc">Create An Account</Link>

               <div>
                 <div style={{marginTop:20}}>
                
  
                  {Loading ? (<CircularProgress color="secondary" />)
                  :
                  ( <Button onClick={GoogleLogin} variant="contained" color="secondary">Login With Google</Button>)
                  }
                
                 {
                   Loading ? ( <CircularProgress />)
                   :
                   (<Button onClick={FacebookLogin} style={{marginLeft:5}} variant="contained" color="primary"><FacebookIcon/>Login With Facebook</Button>)
                 }
               
                 </div>

               <Button className="LoginButton" onClick={doLoginUser}> Login</Button>

               </div>
            </div>
          </Container>
        </center>
       

      </Container>
    </>
  )
}