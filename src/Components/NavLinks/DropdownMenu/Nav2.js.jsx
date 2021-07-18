import {Nav,Container,Navbar,NavDropdown } from "react-bootstrap"
import "./Nav2.css"
import {Link,NavLink} from "react-router-dom"
import { Grid } from "@material-ui/core"
export default function DropDownButton() {
 return(
   <>
   <Navbar  style={{marginTop:"75px"}}>
 
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        
        <NavDropdown className="linkDropDown" color="dark"  title="ALL CATEGORY" >
       <Container style={{width:1400}}>
         <Grid item xl={4} lg={4}>
         <NavDropdown.Item >Action</NavDropdown.Item>
         </Grid>
         <Grid item xl={4} lg={4}>
         <NavDropdown.Item >Another action</NavDropdown.Item>
         </Grid>
         <Grid item xl={4} lg={4}>
         <NavDropdown.Item >Something</NavDropdown.Item>
         </Grid>
       </Container>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <NavLink activeStyle={{color:"#21A49f"}} style={{color:"#393f34"}} to="/MobilePhones" className="LinkColor">Mobile Phones</NavLink>
        <NavLink activeStyle={{color:"#21A49f"}} style={{color:"#393f34"}} to="/Cars" className="LinkColor" >Cars</NavLink>
        <NavLink activeStyle={{color:"#21A49f"}} style={{color:"#393f34"}} to="/MotorCycles" className="LinkColor">Motorcycles</NavLink>
        <NavLink activeStyle={{color:"#21A49f"}} style={{color:"#393f34"}} to="/Houses" className="LinkColor">Houses</NavLink>
        <NavLink activeStyle={{color:"#21A49f"}} style={{color:"#393f34"}}  to="/TVVideoAudio" className="LinkColor">TV-video-Audio</NavLink>
        <NavLink activeStyle={{color:"#21A49f"}} style={{color:"#393f34"}} to="/Tables" className="LinkColor">Tables</NavLink>
        <NavLink activeStyle={{color:"#21A49f"}} style={{color:"#393f34"}} to="/LandAndPlots" className="LinkColor">Land & Plots</NavLink>

      </Nav>
    </Navbar.Collapse>

</Navbar>
   </>
 )   
}