import React from 'react';
import Nav from '../Nav/Nav';
import classes from './Admin.module.css'

const Admin = () => {
    return (
        <>

        <Nav/>

            <div className={classes.manage}>
                <h1 className={classes.Orders}>Stock</h1>

                <div className={classes.MainManage}>
                    <div className={classes.item}>

                    </div>
                </div>
            
            </div>
        </>
    );
};

export default Admin;