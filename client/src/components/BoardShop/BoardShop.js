import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import ItemCard from '../ItemCard/ItemCard';
import ItemNav from '../ItemNav/ItemNav';
import Nav from '../Nav/Nav';
import classes from '../Shop/Shop.module.css';

// import AliceCarousel from 'react-alice-carousel';
// import "react-alice-carousel/lib/alice-carousel.css";

// import image1 from '../images/1.jpg';
// import image2 from '../images/2.jpg';
// import image3 from '../images/3.jpg';


const BoardShop = () => {

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

        {/* <AliceCarousel autoPlay autoPlayInterval="5000">
            <img src={image1} classname="sliderimg" alt=""/>
            <img src={image2} classname="sliderimg" alt=""/>
            <img src={image3} classname="sliderimg" alt=""/>




        </AliceCarousel> */}

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
            

            
        </div>

        <div className={classes.Popular}>
            <h2>Popular Items</h2> 
            <ItemCard/>
           

       
        </div>
        {/* <div className={classes.right}></div> */}
    </div>
    </>
    );
};

export default BoardShop;