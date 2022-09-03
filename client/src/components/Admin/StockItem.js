import Axios from 'axios';
import React, { useState } from 'react';
import classes from "./Admin.module.css";
import EditStock from './EditStock';


const StockItem = (props) => {

    // console.log(props)

  const [modalArea, setModal] = useState();


    const edit = () => {
        setModal(<EditStock 
          close={setModal}
          id={props.productId}
          ProductName={props.ProductName}
          stock={props.stock}
          Price={props.Price}
          Desc={props.desc}
          SizeOne={props.sevenHalf}
          SizeTwo={props.sizeTwo}
          SizeThree={props.sizeThree}
          editRender={props.editRender}
        />)
      }

      const deleteItem = () => {
        console.log(props.productId);
    
        if(window.confirm("are you sure you want to delete: " + props.ProductName) === true){
          console.log("deleted Item")
    
          Axios.delete("http://localhost:5000/api/deleteproduct/" + props.productId)
          .then((res)=>{
            if(res){
              console.log("Deleted: " + props.ProductName);
              props.editRender(true);
              //alert or something saying it was deleted
            }
          })
          .catch(function (error) {console.log(error)});
        } 
      }


    return (
        <>
        <div className={classes.Stocks}>
            <div className={classes.skuItem}> #{props.SKU} </div>
            <div className={classes.proItem}> {props.ProductName}</div>
            <div className={classes.stockItem}> {props.stock}</div>
            {/* <div className={classes.orderItem}> order</div> */}
            <button onClick={edit} className={classes.orderItem}> Update Quantity </button>
            <button onClick={deleteItem} className={classes.deleteItem}>Delete </button>
          </div>
          {modalArea}
        </>
    );
};

export default StockItem;