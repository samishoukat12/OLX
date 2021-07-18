import React from 'react'
import { useDispatch } from 'react-redux'
import { doLogout } from '../../Redux/Actions/Actions'
export default function Logout() {
    const dispatch = useDispatch()

    const doUserLogout = ( ) => {
        dispatch(doLogout())
    }
    return (
        <div>
            
        </div>
    )
}
