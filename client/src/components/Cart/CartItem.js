import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import classes from './Cart.module.css'


const CartItem = () => {
    let productId = sessionStorage.getItem("productId");
  
    const [productData, setProductData] = useState({
      productName: "",
      description: "",
      Price: "",
      DiscPrice: "",
      inStock: "",
      SizeOne: "",
      SizeTwo: "",
      SizeThree: ""
    });

    console.log(productData)
  
    useEffect(()=>{
      Axios.get('http://localhost:5000/api/oneproduct/' + productId)
      .then(res => {
        let data = res.data;
        setProductData({
          ProductName: data.ProductName,
          Description: data.Description,
          Price: data.Price,
          DiscPrice: data.DiscountedPrice,
          stock: data.stock,
          SizeOne: data.Sizes.sevenHalf,
          SizeTwo: data.Sizes.eight,
          SizeThree: data.Sizes.eightHalf
        })
      })
      .catch()
    }, []);


    return (
        <div className={classes.CartPiece}>
            <div className={classes.CartImage}></div>
            <h2 className={classes.CartName}>{productData.productName}</h2>
            <h2 className={classes.CartPrice}>hehe</h2>

        </div>
    );
};

export default CartItem;