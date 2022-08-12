import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Nav from '../Nav/Nav';
import classes from './Individual.module.css';


const Individual = (props) => {

    
    

    // const backhandler = () => {
    //     props.
    // };

    return (
        <>

            <Nav />
{/* 
            <div className={classes.indiv}>

                <div className={classes.container}>

                    <Link to="/BoardShop">  <div className={classes.back} >  </div> </Link>



                    <div className={classes.ImageContainer}>
                        <div className={classes.InsideImg}> </div>

                    </div>

                    <div className={classes.DetailContainer}>
                        <h1>KFD Special (green spec)</h1>

                        <div className={classes.rating}>
                            <div className={classes.star}></div>
                            <div className={classes.star}></div>
                            <div className={classes.star}></div>
                            <div className={classes.star}></div>
                            <div className={classes.star}></div>
                        </div>

                        <h2>R 200,00 </h2>

                        <h4>Availability: </h4>
                        <h4>Brand: </h4>

                        <div className={classes.quantity}>
                            <div className={classes.one}>-</div>
                            <div className={classes.two}>1</div>
                            <div className={classes.three}>+</div>

                        </div>
                        <Link to="/Cart"> <button className={classes.add}>add to cart</button></Link>

                    </div>

                    <div className={classes.bestseller}>
                        <h1>Best Sellers</h1>

                        <div className={classes.besties}>
                            <div className={classes.bestImg}>
                                <div className={classes.bestImgImg}></div>
                            </div>
                            <h2 className={classes.hh2}>HEROIN Special</h2>
                            <div className={classes.rating}>
                                <div className={classes.star}></div>
                                <div className={classes.star}></div>
                                <div className={classes.star}></div>
                                <div className={classes.star}></div>
                                <div className={classes.star}></div>
                            </div>
                            <h2 className={classes.bestPrice}>R 200,00 </h2>
                        </div>

                        <div className={classes.besties}>
                            <div className={classes.bestImg}>
                                <div className={classes.bestImgImg}></div>
                            </div>
                            <h2 className={classes.hh2}>HEROIN Special</h2>
                            <div className={classes.rating}>
                                <div className={classes.star}></div>
                                <div className={classes.star}></div>
                                <div className={classes.star}></div>
                                <div className={classes.star}></div>
                                <div className={classes.star}></div>
                            </div>
                            <h2 className={classes.bestPrice}>R 200,00 </h2>
                        </div>

                        <div className={classes.besties}>
                            <div className={classes.bestImg}>
                                <div className={classes.bestImgImg}></div>
                            </div>
                            <h2 className={classes.hh2}>HEROIN Special</h2>
                            <div className={classes.rating}>
                                <div className={classes.star}></div>
                                <div className={classes.star}></div>
                                <div className={classes.star}></div>
                                <div className={classes.star}></div>
                                <div className={classes.star}></div>
                            </div>
                            <h2 className={classes.bestPrice}>R 200,00 </h2>
                        </div>

                    </div>

                    <div className={classes.moreDeets}>
                        <h7>More Information</h7>
                        <ul>
                            <li>asdad</li>
                            <li>asdasd</li>
                            <li>asdasd</li>
                            <li>asdasd</li>

                        </ul>

                    </div>

                </div>



            </div> */}

            <div className={classes.indiv}>

                <div className={classes.containerLeft}>
                    <div className={classes.mainImage}></div>
                </div>

                <div className={classes.containerRight}>
                    <h1 className={classes.name}>Product Name</h1>
                    <h4 className={classes.description}>Product description i.e model num ?</h4>
                    <h4 className={classes.brand}>Brand</h4>
                    <h4 className={classes.price}>Price</h4>
                    <h4 className={classes.stock}>available: </h4>
                    <h4 className={classes.colors}>Sizes </h4>

                    <div className={classes.block}> 8.5'</div>
                    <div className={classes.block}></div>
                    <div className={classes.block}></div>



                    <button className={classes.add}  > Add to Cart </button>
                </div>

                <div className={classes.bestSeller}>
                    <h1 className={classes.sellerText}> best sellers </h1>

                    <div className={classes.best1}>
                        <div className={classes.bestImage}></div>
                        <h1 className={classes.bestName}>KFD</h1>
                        <h3>R900</h3>
                    </div>

                    <div className={classes.best2}>
                    <div className={classes.bestImage}></div>
                        <h1 className={classes.bestName}>KFD</h1>
                        <h3>R900</h3>
                    </div>

                    <div className={classes.best3}>
                    <div className={classes.bestImage}></div>
                        <h1 className={classes.bestName}>KFD</h1>
                        <h3>R900</h3>
                    </div>

                    <div className={classes.best4}>
                    <div className={classes.bestImage}></div>
                        <h1 className={classes.bestName}>KFD</h1>
                        <h3>R900</h3>
                    </div>

                    <div className={classes.best5}>
                    <div className={classes.bestImage}></div>
                        <h1 className={classes.bestName}>KFD</h1>
                        <h3>R900</h3>
                    </div>


                </div>


            </div>


        </>
    );
};

export default Individual;