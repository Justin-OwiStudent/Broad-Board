import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import classes from './Shop.module.css';

const Shop = () => {
    return (
        <div className={classes.MainShop}>
            {/* <div className={classes.left}></div> */}
            <div className={classes.NewArrivals}>
                <h2>New Arrivals</h2> 
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
               

               
               

                
            </div>

            <div className={classes.Popular}>
                <h2>Popular Items</h2> 
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                
               

           
            </div>
            {/* <div className={classes.right}></div> */}
        </div>
    );
};

export default Shop;