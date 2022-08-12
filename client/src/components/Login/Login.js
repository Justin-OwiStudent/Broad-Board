import React from 'react';
import classes from './Login.module.css'
import { Link} from "react-router-dom";


const Login = () => {
    return (
        <>
        <div className={classes.Main}>

                <div className={classes.LOGO}></div>
                
                <div className={classes.login}>
                    <h1 className={classes.log}>Login</h1>

                    <input placeholder='Username' className={classes.username}/>
                    <input placeholder='Password' className={classes.password}/>
        <Link to='./Landing'> <button className={classes.but}> Log in</button> </Link>
                    

                </div>
            
        </div>
        </>
    );
};

export default Login;