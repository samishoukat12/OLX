import React from 'react'
import { Container, Typography, TextField, Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import "./SignUp.css"
import {useSignUp} from "./useSignUp"
export default function SignUp() {
    const[password,email,cnic,number,error,setCnic,setNumber,setEmail,setPassword,doSignupUser,setConfirmpassword,Confirmpassword]=useSignUp()
    return (
        <>
        <p>{error}</p>
        <Container className="Container">
            <center>
                <Typography className="SignUpText">SignUp</Typography>
              <form>
              <div className="SignUptextFields">
                    <TextField label="Email" value={email} type="email" fullWidth="bool" required="bool" onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div  className="SignUptextFields">
                    <TextField label="Password" value={password}  type="password" fullWidth="bool" required="bool" onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div  className="SignUptextFields">
                    <TextField label="Confirm Password" value={Confirmpassword} type="password" fullWidth="bool" required="bool" onChange={(e)=>setConfirmpassword(e.target.value)} />
                </div>
                <div  className="SignUptextFields">
                    <TextField label="Number" value={number} placeholder="03*********"  type="text" fullWidth="bool" required="bool" onChange={(e)=>setNumber(e.target.value)} />
                </div>
                <div className="SignUptextFields">
                    <TextField label="CNIC" value={cnic} placeholder="33***-*******-*"  fullWidth="bool"  required="bool" onChange={(e)=>setCnic(e.target.value)}/>
                </div>
               <div className="HaveAcc">
               <Link to="/login" className="HaveAcc">Have an account?</Link>
               </div>
                <div>
                    <Button className="SignUpbtn" onClick={doSignupUser}>SignUp</Button>
                </div>
              </form>
            </center>
        </Container>
        </>
    )
}
