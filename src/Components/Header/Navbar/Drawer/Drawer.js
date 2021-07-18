import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import logo from "../../../../Assets/Logo/OLX.svg";
import "./Drawer.css";
import Grid from "@material-ui/core/Grid";
import Grouped from "./NvbarGroupSearcg";
// import LoginModal from "../LoginModal/LoginModal"
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import SignUpModal from "../SignUpButton/SignUpButton"
// ReactBootstrap
import InputGroup from "react-bootstrap/InputGroup"
import FormControl from "react-bootstrap/FormControl"
import {Link} from "react-router-dom"
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux'
import { doLogout } from '../../../../Redux/Actions/Actions'
import {useEffect} from "react"
import { alreadyLoginUser } from "../../../../Redux/Actions/Actions";
import SimplePopover from "../../../UserLoginOnButton/ButtonOnLogin";
const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme,
  drawerPaper: {
    width: drawerWidth,
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(0),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "auto",
    height: "40px",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

function MenuDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch()
  

  const doUserLogout = ( ) => {
      dispatch(doLogout())
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {[<SignUpModal />].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}  >
      <CssBaseline />
      <Grid Container>
        <AppBar  style={{ backgroundColor: "#F7F8F8" }}>
          <Toolbar>
          <Hidden smUp implementation="css">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerOpen}
              className={classes.menuButton}
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
            </Hidden>
            <Typography variant="h6" noWrap></Typography>
            <Grid item xl={1} lg={1} xs={12}  md={1} sm={1}>
              <Link to="/">
                <img src={logo} className="logo" />
              </Link>
            </Grid>
            <Grid item lg={3} xl={3} md={4} sm={5}>
              <Hidden xsDown implementation="css">
                <Grouped />
              </Hidden>
            </Grid>
            <Grid item lg={6} xl={3} md={5} sm={5} style={{ width: "100%" }}>
              <Hidden xsDown  implementation="css">
                <div className={classes.search} style={{ width: "100%" }}>
                <InputGroup size="lg" >
                  <FormControl
                 
                    placeholder="Find Cars, Mobile Phone and more..."
                    aria-label="Find Cars, Mobile Phone and more..."
                    aria-describedby="basic-addon2"
                    
                  />
                  <InputGroup.Append>
                    <Button variant="outline-secondary" style={{backgroundColor:"#002f34",color:"#ffffff",width:"30px"}}><SearchOutlinedIcon/></Button>
                  </InputGroup.Append>
                </InputGroup>
                </div>
              </Hidden>
            </Grid>

            <Grid item xl={1} lg={1} md={1} sm={1}>
              <Hidden xsDown  implementation="css">

                {/* <LoginModal /> */}
                {
                  authState?
                  (  <div  className="LogIn"><SimplePopover/></div> )
                  :
                  ( <div  className="LogIn"> <Link to="/Login" className="LogIn">Login</Link></div>)
                }
              
            

              </Hidden>
            </Grid>
            <Grid item xl={1} lg={1} md={1}>
              <Hidden smDown  implementation="css">
                
                {
                  authState?
                  ( <SignUpModal /> )
                  :
                  ( <div  className="LogIn"> <Link to="/signup" className="LogIn">SignUp</Link></div>)
                }
              </Hidden>
            </Grid>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden sm implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={open}
              onClose={handleDrawerClose}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xlDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
      </Grid>
    </div>
  );
}

MenuDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default MenuDrawer;
