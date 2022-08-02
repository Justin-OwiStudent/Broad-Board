import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import ItemCard from '../ItemCard/ItemCard';
import ItemNav from '../ItemNav/ItemNav';
import Nav from '../Nav/Nav';
import classes from '../Shop/Shop.module.css';



const GripShop = () => {

    const images = [
        { url: "../images/1.jpg" },
        { url: "../images/2.jpg" },
        { url: "../images/3.jpg" },
        { url: "../images/4.jpg" },
      ];

    return (
        <>
        <Nav/>
            <div className={classes.Slider}> 

                <SimpleImageSlider
                
                    width={1900}
                    height={700}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
                
             </div>

            <ItemNav/>
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
            <ItemCard/>



           

       
        </div>
        {/* <div className={classes.right}></div> */}
    </div>
    </>
    );
};

export default GripShop;