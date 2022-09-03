import React from 'react';
import Nav from '../Nav/Nav';
import classes from './Cart.module.css'
import Cartmodal from './Cartmodal';

const Cart = () => {
    return (
    <>
        <Nav/>
        <div className={classes.cart}>
            <div className={classes.items}>
            <div className={classes.Logo}></div>
            <div className={classes.details}>
                <div className={classes.shipping}>
                    <h3 className={classes.ShipDeets}>Enter Shipping details</h3>
                    <hr className={classes.line1}/>

                    <input placeholder='Enter Street Address' className={classes.address}/>
                    <input placeholder='Enter Town' className={classes.town}/>
                    <input placeholder='Enter City' className={classes.city}/>

                    
                    <hr className={classes.line}/>
                </div>
                <div className={classes.payment}>
                    <h3 className={classes.pay}>Payment details</h3>
                    <input className={classes.acc} placeholder='Account holder'/>
                    <input className={classes.num} placeholder='Card Number'/>
                    <input className={classes.exp} placeholder='MM/YY'/>
                    <input className={classes.cvv} placeholder='cvv'/>

                        <button className={classes.check}>Checkout</button>
                </div>
                
                <div className={classes.right}>
                    <div className={classes.checkItems}>
                        <h2 className={classes.YourOrder}>YOUR ORDER</h2>
                        <hr className={classes.line3}/>
                        <div className={classes.orderItem}>
                            <div className={classes.OrderImg}></div>
                            <div className={classes.OrderDes}><h2>Enjoi - Green Panda Special</h2></div>
                            <h3 className={classes.OrderPrice}>R999</h3>
                        </div>

                        
                    </div>

                    <div className={classes.Total}>
                        <h2> Subtotal: </h2>
                        <h2> Shipping: </h2>
                        <h2> Subtotal: </h2>

                    </div>
                </div>

            </div>


            </div>
            
        </div>
        <Cartmodal/>
    </>
    );
};

export default Cart;