import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import classes from "./Admin.module.css";
import OrderItem from "./OrderItem";

const Orders = () => {

// ClientName: 
// Product: 
// OrderNumber: 
// OrderDate: 
    
const [readOrders, setReadOrders] = useState();
const [renderOrders, setRenderOrders] = useState(false);

// ClientName: req.body.ClientName,
//         Product: req.body.Product,
//         OrderNumber: req.body.OrderNumber,
//         OrderDate: req.body.OrderDate

useEffect(() => {
  Axios.get("http://localhost:5000/api/allorders").then((res) => {
    let data = res.data;
    const orderItem = data.map((item) => (
      <OrderItem
        key={item._id}
        orderNum={item.OrderNum}
        clientName={item.ClientName}
        productName={item.Product}
        orderNumber={item.OrderNumber}
        orderDate={item.OrderDate}
        editRender={setRenderOrders}
      />
    ));
    setReadOrders(orderItem);
    setRenderOrders(false);
  });
}, [renderOrders]);


  return (
    <>
      <Nav />

      <Link to="/Stock">
        
        <h1 className={classes.Stock}>Stock</h1>{" "}
      </Link>
      <Link to="/Orders">
     
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

         {readOrders}

        </div>
      </div>
    </>
  );
};

export default Orders;
