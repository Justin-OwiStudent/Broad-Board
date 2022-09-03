import React from 'react';
import classes from "./Admin.module.css";


const OrderItem = (props) => {
    return (
       <>
        <div className={classes.orders}>
              <div className={classes.orderNumber}>{props.orderNum}</div>
              <div className={classes.orderClient}>{props.clientName}</div>
              <div className={classes.orderProduct}>{props.productName}</div>
              <div className={classes.orderDate}> {props.orderDate}</div>
          </div>
       </>
    );
};

export default OrderItem;