import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Link, useHistory } from "react-router-dom"
import Dropdown from "../../Assets/imgs/Dropdown.png"
import DropUp from "../../Assets/imgs/DropUo.png"
import { Container } from 'react-bootstrap';
import Divider from '@material-ui/core/Divider';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NotesIcon from '@material-ui/icons/Notes';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useDispatch } from 'react-redux';
import { doLogout } from '../../Redux/Actions/Actions';
import "./ButtonOnLogin.css"
const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
    root: {
        width: 280,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function SimplePopover() {
    const history = useHistory();
    const dispatch = useDispatch()
    const [ArrowDirection, setArrowDirection] = React.useState(<img src={Dropdown} style={{ height: 20, width: 20 }} />)
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const doUserLogout = () => {
        dispatch(doLogout());
        history.push("/login");
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setArrowDirection(<img src={Dropdown} style={{ height: 20, width: 20 }} />)
    };

    const handleClose = () => {
        setAnchorEl(null);
        setArrowDirection(<img src={DropUp} style={{ height: 20, width: 20 }} />)
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Link className="ProFile" onClick={handleClick}><AccountCircleIcon fontSize="large" />{ArrowDirection}</Link>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}

            >
                <Container style={{ padding: 10, backgroundColor: "white", width: 300 }} >

                    <div >

                        <List component="nav" aria-label="main mailbox folders" className={classes.root} >
                            <ListItem >
                                <div>
                                    <AccountCircleIcon style={{ fontSize: 80 }} />

                                </div>
                                <div >
                                    <Typography style={{ padding: 10 }}>
                                        Welcome to OLX!
                                    </Typography>
                                </div>
                            </ListItem>
                            <Divider />
                            <Link to="/SellingForm" className="ListLinks">
                                <ListItem button>
                                    <ListItemIcon>
                                        <PhotoCameraIcon />
                                    </ListItemIcon>
                                    <ListItemText primary=" Start Selling" />
                                </ListItem>
                            </Link>
                            <Link to="/SellingAds" className="ListLinks">
                                <ListItem button>
                                    <ListItemIcon>
                                        <NotesIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="My Ads" />
                                </ListItem>
                            </Link>
                         <Link className="ListLinks">
                         <ListItem button>
                                <ListItemIcon>
                                    <FavoriteBorderIcon />
                                </ListItemIcon>
                                <ListItemText primary="Favorites" />
                            </ListItem>
                         </Link>
                            <Divider />
                           <Link className="ListLinks">
                           <ListItem button onClick={doUserLogout}>
                                <ListItemIcon>
                                    <ExitToAppIcon />
                                </ListItemIcon>
                                <ListItemText primary="Logout"  />
                            </ListItem>
                           </Link>
                        </List>
                    </div>
                </Container>

            </Popover>
        </div>
    );
}
