import React from "react";
import classes from "./ItemCard.module.css";
import { Link, useNavigate } from "react-router-dom";


const ItemCard = (props) => {
  console.log(props)

  let navigate = useNavigate();

  const toProduct = () => {
    sessionStorage.setItem('productId', props.productId);
    sessionStorage.setItem('props', props);

    navigate('/Individual')
  }

  const AddCart = () => {
    sessionStorage.setItem('productId', props.productId);
  
  }


  return (
    
      
      <div onClick={toProduct} className={classes.card}>
        <div className={classes.item}></div>
        <div className={classes.Description}>
          <h3>{props.ProductName}</h3>

          <h5>R {props.Price}</h5>

          <button className={classes.addButton} onClick={AddCart}> Add to cart</button>
          {/* <div className={classes.addButton}> Add to cart</div> */}
        </div>
      </div>
    
  );
};

export default ItemCard;
