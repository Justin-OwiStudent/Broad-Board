import Axios from "axios";
import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import classes from "./Shop.module.css";

const Shop = () => {
  const [readProducts, setReadProducts] = useState();
  const [renderProducts, setRenderProducts] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/allproducts").then((res) => {
      let data = res.data;
      const productItem = data.map((item) => (
        <ItemCard
          key={item._id}
          productId={item._id}
          name={item.name}
          price={item.price}
          discPrice={item.DiscountedPrice}
          stock={item.inStock}
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
    <div className={classes.MainShop}>
      {/* <div className={classes.left}></div> */}
      <div className={classes.NewArrivals}>
        <h2>New Arrivals</h2>
        

        {readProducts}
      </div>

      <div className={classes.Popular}>
        <h2>Popular Items</h2>
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>
      {/* <div className={classes.right}></div> */}
    </div>
  );
};

export default Shop;
