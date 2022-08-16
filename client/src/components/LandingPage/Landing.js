import React from 'react';
// import ImageSlider from 'react-simple-image-slider';
// import ImageSlider from 'react-simple-image-slider';
// import SimpleImageSlider from "react-simple-image-slider";

// import Individual from '../IndividualItem/Individual';
// import ItemNav from '../ItemNav/ItemNav';
import Nav from '../Nav/Nav';
import Shop from '../Shop/Shop';
import ImageSlider from './ImageSlider';
import classes from './Landing.module.css';
import { SliderData } from "./SliderData";

const Landing = () => {


    // const images = [
    //     { url: "../images/1.jpg" },
    //     { url: "../images/2.jpg" },
    //     { url: "../images/3.jpg" },
    //     { url: "../images/4.jpg" },
    //   ];
      

    return (
        <div className={classes.all}>
            <Nav/>
            <div className={classes.Slider}> 

            <ImageSlider slides={SliderData}/>

            {/* <ImageSlider/> */}

                {/* <SimpleImageSlider
                
                    width={1900}
                    height={700}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                /> */}
                
             </div>
            {/* <ItemNav/> */}
            <Shop/>
        </div>
    );
};

export default Landing;