import React from 'react'
import { Route, Redirect } from "react-router-dom";
export default function PublicRouting({children, auth, ...rest }) {
    return (
        <Route {...rest} render={()=> auth? <Redirect to={"/profile"} /> : children} />
    )
}
