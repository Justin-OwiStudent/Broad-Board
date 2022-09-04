import Axios from 'axios';
import React from 'react';
import classes from "./Admin.module.css";


const OrderItem = (props) => {

    console.log(props)

    const deleteOrder = () => {
        // console.log(props.productId);
    
        if(window.confirm("are you sure you want to delete order number: " + props.orderNumber) === true){
          console.log("deleted Item")
    
          Axios.delete("http://localhost:5000/api/deleteorder/" + props.orderId)
          .then((res)=>{
            if(res){
              console.log("Deleted order Number: " + props.orderNumber);
              props.editRender(true);
              //alert or something saying it was deleted
            }
          })
          .catch(function (error) {console.log(error)});
        } 
      }

    return (
       <>
        <div className={classes.orders}>
              <div className={classes.orderNumber}>{props.orderNumber}</div>
              <div className={classes.orderClient}>{props.clientName}</div>
              <div className={classes.orderProduct}>{props.productName}</div>
              <div className={classes.orderDate}> {props.orderDate}</div>
              <button className={classes.delOrder} onClick={deleteOrder} > Dispatch </button>
          </div>
       </>
    );
};

export default OrderItem;