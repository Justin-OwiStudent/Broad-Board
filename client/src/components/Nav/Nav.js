import React from 'react';
import classes from './Nav.module.css'

const Nav = () => {
    return (
        
        <div className={classes.bar}>
            <div className={classes.logo}>

            </div>
            <div className={classes.log}>
                <h3>Log in</h3>
            </div>
            <div className={classes.admin}>
                <h3>Admin</h3>

            </div>
            <div className={classes.pfp}>
                
            </div>
        </div>

       
    );
};

export default Nav;