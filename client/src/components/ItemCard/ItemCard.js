import React, { useEffect, useState } from "react";
import classes from "./ItemCard.module.css";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";
import CartItem from "../Cart/CartItem";


const ItemCard = (props) => {


  let navigate = useNavigate();

  const toProduct = () => {
    sessionStorage.setItem('productId', props.productId);
    sessionStorage.setItem('props', props);

    navigate('/Individual')
  }

  const AddCart = () => {
    sessionStorage.setItem('productId', props.productId);
  
  }

 

  // let productId = sessionStorage.getItem("productId");


  // const [readProducts, setReadProducts] = useState();
  // const [renderProducts, setRenderProducts] = useState(false);

  // useEffect(()=>{
  //   Axios.get('http://localhost:5000/api/oneproduct/' + productId)
  //   .then(res => {
  //     let data = res.data;
  //     // console.log(data)
  //     const productItem = data.map((item) => (
  //       <CartItem
  //         key={item._id}
  //         SKU={item.SKU}
  //         productId={item._id}
  //         ProductName={item.ProductName}
  //         Price={item.Price}
  //         Desc={item.Description}
  //         DiscPrice={item.DiscountedPrice}
  //         stock={item.stock}
  //         // Sizes={item.Sizes}
  //         SizeOne={item.Sizes.sevenHalf}
  //         SizeTwo={item.Sizes.eight}
  //         SizeThree={item.Sizes.eightHalf}
  //         editRender={setRenderProducts}
  //       />
  //     ));
  //     console.log(productItem)
  //     setReadProducts(productItem);
  //     setRenderProducts(false);
  //   });
  // }, [renderProducts]);


  return (
    
      
      <div className={classes.card}>
        <div    onClick={toProduct}> <img className={classes.item} src={'http://localhost:5000/productImages/' + props.image}/> </div>
        <div className={classes.Description}>
          <h3>{props.ProductName}</h3>

          <h5>R {props.Price}</h5>

          <button className={classes.addButton} onClick={AddCart} > Add to cart</button>
          {/* <div className={classes.addButton}> Add to cart</div> */}
        </div>
      </div>
    
  );
};

export default ItemCard;
