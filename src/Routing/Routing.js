import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuDrawer from "../Components/Header/Navbar/Drawer/Drawer"
import DropDownButton from "../Components/NavLinks/DropdownMenu/Nav2.js"
import Cars from "../Modules/Cars/Crs"
import Houses from "../Modules/Houses/Houses"
import LandAndPlots from "../Modules/Land&Plots/Land&Plots"
import MobilePhones from "../Modules/MobilePhones/MobilePhones"
import MotorCycles from "../Modules/Motorcycle/Motorcycle"
import TVVideoAudio from "../Modules/TV.Video-Audio/TV-Video-Audio"
import Tables from "../Modules/Tables/Tables"
import Home from "../Modules/Home/Home"
import SignUp from "../Modules/Auth/SignUp/SignUp"
// import PrivateRoute from "./PublicRouting";
// import PublicRoute from "./PublicRouting";
// import { useSelector } from "react-redux";
import LoginPage from "../Modules/Auth/LoginPage/LoginPage"
import PublicRouting from "./PublicRouting";
import PrivateRouting from "./PrivateRouting";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react"
import { alreadyLoginUser } from "../Redux/Actions/Actions";
import SellingForm from "../Modules/Profile/SellingForm"
import NotFound from "./NotFoung"
import SellingAds from "../Modules/Profile/SellingAds/SellingAds";
 


export default function Routing() {
    const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)
    // const authState = useSelector(state => state.AuthReducer.isUserLoggedIn)
    const dispatch = useDispatch()
    const [Loading, setLoading] = useState(true)

    useEffect(() => {
        dispatch(alreadyLoginUser(setLoading))
    }, [])
    return (
        <Router>
            <div> <MenuDrawer /></div>

            <DropDownButton />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/Cars" >
                    <Cars />
                </Route>
                <Route path="/Houses" component={Houses} />
                <Route path="/LandAndPlots" component={LandAndPlots} />
                <Route path="/MobilePhones" component={MobilePhones} />
                <Route path="/MotorCycles" component={MotorCycles} />
                <Route path="/Tables" component={Tables} />
                <Route path="/TVVideoAudio" component={TVVideoAudio} />
                <Route path="/login"><LoginPage /></Route>
                <Route path="/SignUp"><SignUp /></Route>
                <Route path="/SellingForm"><SellingForm /></Route>
                <Route path="/SellingAds"><SellingAds/></Route>
               


             {
                    authState ? (<SellingForm />) : (<LoginPage />)
                }

                <PublicRouting path="/login" auth={authState}>
                    <LoginPage />
                    
                </PublicRouting>
                <PrivateRouting path="/profile" auth={authState}>
                    <SellingForm />
                </PrivateRouting> 
               
                 <Route component={NotFound}/>
            </Switch>
        </Router>
    )
}
