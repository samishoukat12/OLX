import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import Link from "@material-ui/core/Link";
import {Link} from "react-router-dom"
import "./SignUpButton.css";
import img from "../../../../Assets/imgs/img.jpg";
import Button from "@material-ui/core/Button";
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import GTranslateIcon from '@material-ui/icons/GTranslate';
import CloseIcon from '@material-ui/icons/Close';
import { Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container"
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SignUpModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    
     <Button className="SellButton" >
     <Link  to="/SellingForm" className="SellLink" >
        <AddIcon/> Sell
        </Link>
      </Button>
     
    
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}

      >
        <Fade in={open}>

          <div className={classes.paper} style={{ borderRadius: 10 }}>

            <Button style={{ borderRadius: "100px", height: "45px", width: "45px" }} onClick={handleClose}><CloseIcon style={{ height: 35, width: 35 }} /></Button>

            <center>
              <Container>
                <img src={img} className="SignUpImg"></img>
              </Container>
              <Typography>Save all your favorite item at one place.</Typography>
              <div style={{ marginTop: 20 }}>
                <Button className="SignUpButton1"><div style={{ marginTop: 3, marginRight: 4 }}><PhoneAndroidIcon /></div>Continue with Phone</Button>
              </div>
              <div style={{ marginTop: 20 }}>
                <Button className="SignUpButton2"><div style={{ marginTop: 3, marginRight: 4 }}><FacebookIcon /></div>Continue with Facebook</Button>
              </div>
              <div style={{ marginTop: 20 }}>
                <Button className="SignUpButton3"><div style={{ marginTop: 3, marginRight: 4 }}><GTranslateIcon /></div>Continue with Google</Button>
              </div>
              <div style={{ marginTop: 20 }}>
                <Button className="SignUpButton4"><div style={{ marginTop: 3, marginRight: 4 }}><EmailIcon /></div>Continue with Email</Button>
              </div>
              <Typography style={{ marginTop: 10 }}>We won't share your personal details with anyone</Typography>
            </center>
          </div>
        </Fade>
      </Modal> */}
    </div>
  );
}
