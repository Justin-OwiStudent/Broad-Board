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
                        <h1 className={classes.orderName}>hehes</h1>
                        <h1 className={classes.orderDetails}>hehes</h1>
                        <h1 className={classes.orderStatus}>hehes</h1>

                    <div className={classes.actions}>
                        <div className={classes.done}></div>
                        <div className={classes.delete}></div>
                    </div>

                    </div>

                    <div className={classes.item}>
                        <h1 className={classes.orderName}>hehes</h1>
                        <h1 className={classes.orderDetails}>hehes</h1>
                        <h1 className={classes.orderStatus}>hehes</h1>


                    <div className={classes.actions}>
                        <div className={classes.done}></div>
                        <div className={classes.delete}></div>
                    </div>
                        

                        

                    </div>
                </div>
            
            </div>
        </>
    );
};

export default Admin;