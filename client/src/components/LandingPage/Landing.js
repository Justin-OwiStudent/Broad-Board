import React, { useEffect, useState } from "react";
// import ImageSlider from 'react-simple-image-slider';
// import ImageSlider from 'react-simple-image-slider';
// import SimpleImageSlider from "react-simple-image-slider";

// import Individual from '../IndividualItem/Individual';
// import ItemNav from '../ItemNav/ItemNav';
import Nav from "../Nav/Nav";
// import Shop from "../Shop/Shop";
import ImageSlider from "./ImageSlider";
import classes from "./Landing.module.css";
import { SliderData } from "./SliderData";
import Axios from "axios";
import ItemCard from "../ItemCard/ItemCard";
import Cartmodal from "../Cart/Cartmodal";
import { BsCart2 } from "react-icons/bs";
import CartItem from "../Cart/CartItem";


const Landing = () => {

  // sessionStorage.getItem("admin")
  // if(sessionStorage == "admin")() => {

  // }

  const [readProducts, setReadProducts] = useState();
  const [renderProducts, setRenderProducts] = useState(false);

  // const [readCart, setReadCart] = useState();
  // const [renderCart, setRenderCart] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/allproducts").then((res) => {
      let data = res.data;
      const productItem = data.map((item) => (
        <ItemCard
          key={item._id}
          SKU={item.SKU}
          productId={item._id}
          ProductName={item.ProductName}
          Price={item.Price}
          Desc={item.Description}
          DiscPrice={item.DiscountedPrice}
          stock={item.stock}
          Sizes={item.Sizes}
          SizeOne={item.Sizes.sevenHalf}
          SizeTwo={item.Sizes.eight}
          SizeThree={item.Sizes.eightHalf}
          image={item.image}
          editRender={setRenderProducts}
        />
      ));
      // let URL = 'http://localhost:5000/productImages/' + data.image;
      // setImgURL(URL);
      console.log(productItem)
      setReadProducts(productItem);
      setRenderProducts(false);
    });
  }, [renderProducts]);

 
  const [modalArea, setModal] = useState();


  const cart = () => {
    setModal(<Cartmodal 
      close={setModal}
    />)
  }



  
  // useEffect(() => {
  //   Axios.get("http://localhost:5000/api/oneproduct/" + productId)
  //   .then((res) => {
  //     let data = res.data;
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
  //         Sizes={item.Sizes}
  //         SizeOne={item.Sizes.sevenHalf}
  //         SizeTwo={item.Sizes.eight}
  //         SizeThree={item.Sizes.eightHalf}
  //         editRender={setRenderCart}
  //       />
  //     ));
  //     console.log(productItem)
  //     setReadCart(productItem);
  //     setRenderCart(false);
  //   });
  // }, [renderCart]);



  

  return (
    <div className={classes.all}>
      <Nav />

      <BsCart2  className={classes.carting} onClick={cart}/> 

    {/* <div className={classes.carting} onClick={cart}></div> */}
    
    {modalArea}
      <div className={classes.Slider}>
        <ImageSlider slides={SliderData} />
      </div>
      {/* <ItemNav/> */}
      {/* <Shop /> */}

      <div className={classes.MainShop}>
      {/* <div className={classes.left}></div> */}
      <div className={classes.NewArrivals}>
       
        {readProducts}
        {/* {readCart} */}
      </div>

      {/* <div className={classes.Popular}>
        <h2>Popular Items</h2>
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div> */}
      
    </div>

    </div>
  );
};

export default Landing;
