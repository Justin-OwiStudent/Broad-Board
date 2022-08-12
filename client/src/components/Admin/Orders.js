import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import classes from "./Admin.module.css";

const Orders = () => {
  return (
    <>
      <Nav />

      <Link to="/Stock">
        {" "}
        <h1 className={classes.Stock}>Stock</h1>{" "}
      </Link>
      <Link to="/Orders">
        {" "}
        <h1 className={classes.Orders}>Orders</h1>{" "}
      </Link>

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

      <div className={classes.OrderPage}>
        <div className={classes.leftSection}>
          <h3 className={classes.OrderText}>Total Orders:</h3>
          <h1 className={classes.TotalOrder}> 5000 </h1>

          <h3 className={classes.outgoingOrders}>outgoing Orders:</h3>
          <h1 className={classes.outOrders}> 5000 </h1>

          <h3 className={classes.outgoingOrders}>Pending orders:</h3>
          <h1 className={classes.outOrders}> 5000 </h1>
        </div>

        <div className={classes.rightSection}>
          <div className={classes.titles}>
            <div className={classes.Number}> Order# </div>
            <div className={classes.Client}> Client Name</div>
            <div className={classes.Product}> Product</div>
            <div className={classes.Date}> Order Date</div>
          </div>

          <div className={classes.orders}>
              <div className={classes.orderNumber}>12</div>
              <div className={classes.orderClient}>Jack Herrer</div>
              <div className={classes.orderProduct}>Almost - blada blada</div>
              <div className={classes.orderDate}> 11/21/1021</div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Orders;
