import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import classes from './Cart.module.css'


const CartItem = () => {
    let productId = sessionStorage.getItem("productId");
    let ProductName = sessionStorage.getItem("ProductName")
    let Price = sessionStorage.getItem("Price")

    // sessionStorage.setItem('ProductId', props.ProductId);
    // sessionStorage.setItem('productName', props.ProductName);
    // sessionStorage.setItem('Price', props.Price);
  
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

    // console.log(productData)
  
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
          image: data.image,
          SizeOne: data.Sizes.sevenHalf,
          SizeTwo: data.Sizes.eight,
          SizeThree: data.Sizes.eightHalf
        })
      })
      .catch()
    }, []);


    return (
        <div className={classes.CartPiece}>
            <div><img className={classes.CartImage} src={'http://localhost:5000/productImages/' + productData.image}/> </div>
            <h2 className={classes.CartName}>{productData.ProductName} Product Name</h2>
            <h2 className={classes.CartPrice}>R {productData.Price}   </h2>

            <div className={classes.DelIt}></div>
        </div>
    );
};

export default CartItem;