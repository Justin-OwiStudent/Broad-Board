import React from "react";
import Nav from "../Nav/Nav";
import classes from "./Admin.module.css";
import Stock from "./Stock";

const Admin = () => {
  return (
    <>
      <Nav />

      <h1 className={classes.Orders}>Stock</h1>
      <h1 className={classes.Orders}>Orders</h1>


        <Stock/>
      {/* <div className={classes.manage}>
        <div className={classes.MainManage}>
          <div className={classes.item}>
            <h1 className={classes.orderName}>Justin Koster</h1>
            <h1 className={classes.orderDetails}>Enjoi - orange</h1>
            <h1 className={classes.orderStatus}>shipped</h1>

            <div className={classes.actions}>
              <div className={classes.done}></div>
              <div className={classes.delete}></div>
            </div>
          </div>

          <div className={classes.item}>
            <h1 className={classes.orderName}>Kevin Koster</h1>
            <h1 className={classes.orderDetails}>Enjoy - Green</h1>
            <h1 className={classes.orderStatus}>Pending</h1>

            <div className={classes.actions}>
              <div className={classes.done}></div>
              <div className={classes.delete}></div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Admin;
