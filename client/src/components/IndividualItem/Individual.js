import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Nav from '../Nav/Nav';
import classes from './Individual.module.css';
import { BsCart2 } from "react-icons/bs";
import Cartmodal from '../Cart/Cartmodal';



const Individual = () => {
    

  let navigate = useNavigate();
    
  const backHome = () => {
    sessionStorage.clear();
    navigate('/Landing')
  }

  let productId = sessionStorage.getItem("productId");

  const [imgURL, setImgURL] = useState();
  

  
  
  const [productData, setProductData] = useState({
    productName: "",
    description: "",
    Price: "",
    DiscPrice: "",
    inStock: "",
    SizeOne: "",
    SizeTwo: "",
    SizeThree: "",
    image: ""
  });

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
      let URL = 'http://localhost:5000/productImages/' + data.image;
      setImgURL(URL);
    })
    .catch()
  }, []);


//   console.log(productId)
  const AddCart = () => {
    sessionStorage.setItem('productId', productId);
  
  }
  const [modalArea, setModal] = useState();
  
  const cart = () => {
    setModal(<Cartmodal 
      close={setModal}
    />)
  }

//   sessionStorage.setItem(productData)

   
    return (
        <>

            <Nav />


            <div className={classes.indiv}>

                <div className={classes.containerLeft}>
                    <div onClick={backHome}  className={classes.back}> </div>
                    <div className={classes.ImgPlace}> <img className={classes.mainImage} src={imgURL} /></div>
                </div>

                <div className={classes.containerRight}>
                    <BsCart2  className={classes.cartingg} onClick={cart}/> 
                    {modalArea}
                    <h1 className={classes.name}>{productData.ProductName}</h1>
                    <h4 className={classes.description}>{productData.Description}</h4>
                    {/* <h4 className={classes.brand}>Brand</h4> */}
                    <h4 className={classes.price}>R: {productData.Price}</h4>
                    <h4 className={classes.stock}>Discounted Price: R {productData.DiscPrice}</h4>

                    <h4 className={classes.stock}>available: {productData.stock} </h4>
                    <h4 className={classes.colors}>Sizes: </h4>

                    <div className={classes.block}> <h6>7.5</h6>  <h6>Available: {productData.SizeOne}</h6>  </div>
                    <div className={classes.block}> <h6>8</h6> <h6>Available: {productData.SizeTwo}</h6> </div>
                    <div className={classes.block}> <h6>8.5</h6> <h6>Available: {productData.SizeThree}</h6> </div>



                    <button className={classes.add} onClick={AddCart} > Add to Cart </button>
                </div>

                {/* <div className={classes.bestSeller}>
                    <h1 className={classes.sellerText}> Similar products </h1>

                    <div className={classes.best1}>
                        <div className={classes.bestImage}></div>
                        <h1 className={classes.bestName}>KFD</h1>
                        <h3>R900</h3>
                    </div>

                    <div className={classes.best2}>
                    <div className={classes.bestImage}></div>
                        <h1 className={classes.bestName}>KFD</h1>
                        <h3>R900</h3>
                    </div>

                    <div className={classes.best3}>
                    <div className={classes.bestImage}></div>
                        <h1 className={classes.bestName}>KFD</h1>
                        <h3>R900</h3>
                    </div>

                    <div className={classes.best4}>
                    <div className={classes.bestImage}></div>
                        <h1 className={classes.bestName}>KFD</h1>
                        <h3>R900</h3>
                    </div>

                    <div className={classes.best5}>
                    <div className={classes.bestImage}></div>
                        <h1 className={classes.bestName}>KFD</h1>
                        <h3>R900</h3>
                    </div>

                    <div className={classes.best6}>
                    <div className={classes.bestImage}></div>
                        <h1 className={classes.bestName}>KFD</h1>
                        <h3>R900</h3>
                    </div>


                </div> */}


            </div>


        </>
    );
};

export default Individual;