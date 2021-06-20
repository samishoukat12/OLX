import {Nav,Container,Navbar,NavDropdown } from "react-bootstrap"
import "./Nav2.css"
import {Link} from "react-router-dom"
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
        <Nav.Link ><Link to="/MobilePhones" className="LinkColor">Mobile Phones</Link></Nav.Link>
        <Nav.Link ><Link to="/Cars" className="LinkColor" >Cars</Link></Nav.Link>
        <Nav.Link ><Link to="/MotorCycles" className="LinkColor">Motorcycles</Link></Nav.Link>
        <Nav.Link ><Link to="/Houses" className="LinkColor">Houses</Link></Nav.Link>
        <Nav.Link ><Link to="/TVVideoAudio" className="LinkColor">TV-video-Audio</Link></Nav.Link>
        <Nav.Link ><Link to="/Tables" className="LinkColor">Tables</Link></Nav.Link>
        <Nav.Link ><Link to="/LandAndPlots" className="LinkColor">Land & Plots</Link></Nav.Link>

      </Nav>
    </Navbar.Collapse>

</Navbar>
   </>
 )   
}