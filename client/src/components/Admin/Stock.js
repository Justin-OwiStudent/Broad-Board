import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import classes from "./Admin.module.css";


const Stock = () => {
    return (
      <>
      <Nav/>

      
    <Link to="/Stock"> <h1 className={classes.Stock}>Stock</h1> </Link>
    <Link to="/Orders"> <h1 className={classes.Orders}>Orders</h1> </Link>
      
        <div className={classes.manage}>
        <div className={classes.MainManage}>
          <div className={classes.item}>
            <h1 className={classes.orderName}>Enjoi</h1>
            <h1 className={classes.orderDetails}> Quantity :5</h1>
            

            <div className={classes.actions}>
              <div className={classes.done}></div>
              <div className={classes.delete}></div>
            </div>
          </div>

          <div className={classes.item}>
          <h1 className={classes.orderName}>Almost</h1>
            <h1 className={classes.orderDetails}> Quantity :5</h1>

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

export default Stock;