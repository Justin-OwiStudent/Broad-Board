import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import BoardShop from '../BoardShop/BoardShop';
import Individual from '../IndividualItem/Individual';
import ItemNav from '../ItemNav/ItemNav';
import Nav from '../Nav/Nav';
import Shop from '../Shop/Shop';
import classes from './Landing.module.css';

const Landing = () => {


    const images = [
        { url: "../images/1.jpg" },
        { url: "../images/2.jpg" },
        { url: "../images/3.jpg" },
        { url: "../images/4.jpg" },
      ];
      

    return (
        <div>
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
            
            {/* <Shop/> */}
{/* 
            <BoardShop/> */}

            
        </div>
    );
};

export default Landing;