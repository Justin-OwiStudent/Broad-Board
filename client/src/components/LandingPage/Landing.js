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

const Landing = () => {


  const [readProducts, setReadProducts] = useState();
  const [renderProducts, setRenderProducts] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/allproducts").then((res) => {
      let data = res.data;
      console.log(data)
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
          sizeOne={item.sizeOne}
          sizeTwo={item.sizeTwo}
          sizeThree={item.sizeThree}
          editRender={setRenderProducts}
        />
      ));
      setReadProducts(productItem);
      setRenderProducts(false);
    });
  }, [renderProducts]);

 



  return (
    <div className={classes.all}>
      <Nav />

      <div className={classes.Slider}>
        <ImageSlider slides={SliderData} />
      </div>
      {/* <ItemNav/> */}
      {/* <Shop /> */}

      <div className={classes.MainShop}>
      {/* <div className={classes.left}></div> */}
      <div className={classes.NewArrivals}>
       
        {readProducts}
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
