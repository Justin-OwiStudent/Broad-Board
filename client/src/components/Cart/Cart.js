import React, { useState } from 'react';
import Nav from '../Nav/Nav';
import classes from './Cart.module.css'
import Cartmodal from './Cartmodal';
import { BsCart2 } from "react-icons/bs";
import { Axios } from 'axios';
import CartItem from './CartItem';


const Cart = (props) => {

    const [modalArea, setModal] = useState();

    const cart = () => {
        setModal(<Cartmodal 
          close={setModal}
        />)
      }

      const Checkout = () => {
        if(window.confirm("Are you done?") === true){
          console.log("Order Placed")
        } 
      }


    //   const addOrder = (e) => {
    //     e.preventDefault();
  
    //     const payloadData = new FormData();
    
    //     let payload = {
    //         clientName: +formValues['clientName'],
    //         password: formValues['password'],
    //   }
  
    //   console.log(payload)
    
    //   Axios.post('http://localhost:5000/api/addproduct', payloadData)
    //   .then((res)=> {
    //     if(res){
    //       console.log("Item Added"); 
    //       setRenderProducts(true);
    //     }
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
    // }


    return (
    <>
        <Nav/>
        <div className={classes.cart}>
                    <BsCart2  className={classes.cartinggg} onClick={cart}/> 
                    {modalArea}
            <div className={classes.items}>
            <div className={classes.Logo}></div>
            <div className={classes.details}>
                {/* <div className={classes.shipping}>
                    <h3 className={classes.ShipDeets}>Enter Shipping details</h3>
                    <hr className={classes.line1}/>

                    <input placeholder='Enter Street Address' className={classes.address}/>
                    <input placeholder='Enter Town' className={classes.town}/>
                    <input placeholder='Enter City' className={classes.city}/>

                    
                    <hr className={classes.line}/>
                </div> */}
                <div className={classes.payment}>
                    <h3 className={classes.pay}>Payment details</h3>
                    {/* <input className={classes.Client} placeholder='Account holder'/>
                    <input className={classes.Password} placeholder='Account holder'/> */}

                    <input className={classes.acc} placeholder='Account holder'/>
                    <input className={classes.num} placeholder='Card Number'/>
                    <input className={classes.exp} placeholder='MM/YY'/>
                    <input className={classes.cvv} placeholder='cvv'/>

                        <button className={classes.check} onClick={Checkout} >Checkout</button>
                </div>
                
                <div className={classes.right}>
                    <div className={classes.checkItems}>
                        <h2 className={classes.YourOrder}>YOUR ORDER</h2>
                        <hr className={classes.line3}/>
                        {/* <div className={classes.orderItem}>
                            <div className={classes.OrderImg}></div>
                            <div className={classes.OrderDes}><h2>Enjoi - Green Panda Special</h2></div>
                            <h3 className={classes.OrderPrice}>R999</h3>
                        </div> */}

                        <CartItem/>
                        


                        
                    </div>

                    <div className={classes.Total}>
                        <h2> Subtotal: R:{}</h2>
                        <h2> Shipping: R:</h2>
                        <h2> Subtotal: R:</h2>

                    </div>
                </div>

            </div>


            </div>
            
        </div>
        {/* <Cartmodal/> */}
    </>
    );
};

export default Cart;