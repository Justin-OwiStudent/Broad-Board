import React, { useState } from 'react';
import classes from './Login.module.css'
import { Link, Navigate} from "react-router-dom";
import Axios from 'axios';


const Login = () => {

// set storage en save username
// get username op landing en wys die admin page as dit n admin logged in is

// const [userData, setUserData] = useState({
//     clientName: "",
//     password: "",
//   });


// useEffect(()=>{
//     Axios.get('http://localhost:5000/api/oneuser/' + userId)
//     .then(res => {
//       let data = res.data;
//       setProductData({
//         clientName: data.clientName,
//         password: data.password,
//       })
//     })
//     .catch()
//   }, []);


// const logged = () => {
//     sessionStorage.setItem('admin', 'admin');
    
//     Navigate('/Landing')
//   }

    return (
        <>
        <div className={classes.Main}>

                <div className={classes.LOGO}></div>
                
                <div className={classes.login}>
                    <h1 className={classes.log}>Login</h1>

                    <input placeholder='Username' className={classes.username}/>
                    <input placeholder='Password' className={classes.password}/>
        <Link to='./Landing'> <button className={classes.but} > Log in</button> </Link>
                    
        <Link to={'./Register'}><h3>Register</h3></Link>

                </div>
            
        </div>
        </>
    );
};

export default Login;