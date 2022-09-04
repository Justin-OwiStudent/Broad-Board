import React from 'react';
import classes from './Login.module.css'
import { Link, Navigate} from "react-router-dom";


const Login = () => {

// set storage en save username
// get username op landing en wys die admin page as dit n admin logged in is

const logged = () => {
    sessionStorage.setItem('admin', 'admin');
    
    Navigate('/Landing')
  }

    return (
        <>
        <div className={classes.Main}>

                <div className={classes.LOGO}></div>
                
                <div className={classes.login}>
                    <h1 className={classes.log}>Login</h1>

                    <input placeholder='Username' className={classes.username}/>
                    <input placeholder='Password' className={classes.password}/>
        <Link to='./Landing'> <button className={classes.but} onClick={logged}> Log in</button> </Link>
                    

                </div>
            
        </div>
        </>
    );
};

export default Login;