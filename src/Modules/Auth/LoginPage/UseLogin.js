import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { doLogin } from '../../../Redux/Actions/Actions'
import { useHistory } from "react-router-dom";


export function UseLogin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [Loading, setLoading] = useState(false)
    let history = useHistory();
    const dispatch = useDispatch()
    const doLoginUser = () => {
        dispatch(doLogin(email, password))
        history.push("/profile");
        setEmail("")
        setPassword("")
    }




    return [email, , password, Loading, setEmail, setPassword, doLoginUser, setLoading]
}