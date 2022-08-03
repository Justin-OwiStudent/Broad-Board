import React from 'react';
import { Link} from "react-router-dom";

import Nav from '../Nav/Nav';
import classes from './Individual.module.css';

const Individual = (props) => {

        // const backhandler = () => {
        //     props.
        // };

    return (
 <>

        <Nav/>

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

                    {/* <div className={classes.besties2}>


                    </div>

                    <div className={classes.besties3}>


                    </div> */}

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

            

        </div>
        </>
    );
};

export default Individual;