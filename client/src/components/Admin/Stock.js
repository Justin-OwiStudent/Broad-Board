import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import classes from "./Admin.module.css";


const Stock = () => {
    return (
      <>
      <Nav/>

      
    <Link to="/Stock"> <h1 className={classes.Stock}>Stock</h1> </Link>
    <Link to="/Orders"> <h1 className={classes.Orders}>Orders</h1> </Link>
      
      <div className={classes.main}>
          <div className={classes.titles}>
            <div className={classes.sku}> SKU </div>
            <div className={classes.pro}> Product Name</div>
            <div className={classes.stock}> Stock</div>
            <div className={classes.order}> Update Quantity </div>
          </div>




          <div className={classes.Stocks}>
            <div className={classes.skuItem}> #1001 </div>
            <div className={classes.proItem}> product name</div>
            <div className={classes.stockItem}> stock</div>
            {/* <div className={classes.orderItem}> order</div> */}
            <button className={classes.orderItem}> Update Quantity </button>
          </div>

          <div className={classes.Stocks}>
            <div className={classes.skuItem}> #2001 </div>
            <div className={classes.proItem}> product name</div>
            <div className={classes.stockItem}> stock</div>
            <button className={classes.orderItem}> Update Quantity </button>

          </div>

      </div>


        {/* <div className={classes.manage}>
        <div className={classes.MainManage}>
          <div className={classes.item}>
            <h1 className={classes.orderName}>Enjoi</h1>
            <h1 className={classes.orderDetails}> Quantity :5</h1>
            

            <div className={classes.actions}>
              <div className={classes.done}></div>
              <div className={classes.delete}></div>
            </div>
          </div>

          <div className={classes.item}>
          <h1 className={classes.orderName}>Almost</h1>
            <h1 className={classes.orderDetails}> Quantity :5</h1>

            <div className={classes.actions}>
              <div className={classes.done}></div>
              <div className={classes.delete}></div>
            </div>
          </div>
        </div>
      </div> */}
      </>
    );
};

export default Stock;