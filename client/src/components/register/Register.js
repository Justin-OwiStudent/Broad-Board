import React, { useState } from 'react';
import classes from '../Login/Login.module.css'
import { Link, Navigate} from "react-router-dom";
import Axios from 'axios';


const Register = () => {



const logged = () => {
    sessionStorage.setItem('admin', 'admin');
    
    Navigate('/Landing')
  }

    return (
        <>
        <div className={classes.Main}>

                <div className={classes.LOGO}></div>
                
                <div className={classes.login}>
                    <h1 className={classes.log}>Register</h1>

                    <input placeholder='Username' className={classes.username}/>
                    <input placeholder='Password' className={classes.password}/>
                    <Link to='/'> <button className={classes.but} onClick={logged}> Sign Up</button> </Link>


                    <Link to={'/'}><h3>login</h3></Link>
                    
                    

                </div>
            
        </div>
        </>
    );
};

export default Register;