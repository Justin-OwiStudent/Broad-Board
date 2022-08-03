import React from "react";
import classes from "./ItemCard.module.css";
import { Link } from "react-router-dom";

const ItemCard = () => {
  return (
    <Link to="/Individual">
      {" "}
      <div className={classes.card}>
        <div className={classes.item}></div>
        <div className={classes.Description}>
          <h3>KFD Special</h3>

          <h5>R 200</h5>

          <button className={classes.addButton}> Add to cart</button>
          {/* <div className={classes.addButton}> Add to cart</div> */}
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
