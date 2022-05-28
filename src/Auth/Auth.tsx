import { FC } from 'react'
import { Outlet } from 'react-router-dom'

const Auth:FC = () => {

    //Simple auth
    fetch('http://localhost/test/checkAuth', {credentials: 'include'})
    .then(res => {return res.json()})
    .then(data =>{
        console.log(data)
    })

    return(<Outlet/>)
}

export default Auth