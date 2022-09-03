import Axios from 'axios';
import React, { useState } from 'react';
import classes from "./Admin.module.css";


const EditStock = (props) => {

    // console.log(props)
    
    let editFormValues = {ProductName: props.ProductName, Price: props.Price, Description: props.Description, SizeOne: props.sevenHalf, SizeTwo: props.eight, SizeThree: props.eightHalf};
    
    const [editValues, setEditValues] = useState(editFormValues);
    
    const updateValues = (e) => {
      const {name, value} = e.target;
      setEditValues({...editValues, [name]: value});
      console.log(editValues)
    }
    
    const updateProd = (e) => {
      e.preventDefault();
      let productId = props.id;
      let payload = editValues;
    
      Axios.patch('http://localhost:5000/api/updateproduct/' + productId, payload)
      .then((res)=>{
        if(res){
          console.log("item updated");
          props.close();
          props.editRender(true);
        }
      })
      .catch(function (error) {console.log(error)});
    }
    
    const closeModal = () => {
      props.close();
    }

    // SKU: +formValues['SKU'],
    // ProductName: formValues['ProductName'],
    // Price: +formValues['Price'],
    // DiscountedPrice: +formValues['DiscountedPrice'],
    // stock: stock,
    // Description: formValues['Description'] ,
    // Sizes: { 
    //   sevenHalf: +formValues['SizeOne'],
    //   eight:  +formValues['SizeTwo'],
    //   eightHalf: +formValues['SizeThree'],
    
    return (
        <>
        <div className={classes.EditModal}>
            <h1 className={classes.editTitle}>Edit Stock</h1>

            <form className={classes.EditForm} >  
                {/* <h4>SKU:</h4> */}
                <input className={classes.editSKU} name="SKU" onChange={updateValues} placeholder='SKU'/>
                {/* <h4>Product Name:</h4> */}
                <input className={classes.editProdName} name="ProductName" onChange={updateValues} placeholder='ProductName'/>
                {/* <h4>Price:</h4> */}
                <input className={classes.editPrice} name="Price" onChange={updateValues} placeholder='Price'/>
                {/* <h4>DiscountedPrice:</h4> */}
                <input className={classes.editDiscountedPrice} name="DiscountedPrice" onChange={updateValues} placeholder='DiscountedPrice'/>
                {/* <h4>Description:</h4> */}
                <input className={classes.editDescription} name="Description" onChange={updateValues} placeholder='Description'/>
                {/* <h4>SevenHalf:</h4> */}
                <input className={classes.EditSeven} name="SizeOne" onChange={updateValues} placeholder='SizeOne'/>
                {/* <h4>SevenHalf:</h4> */}
                <input className={classes.EditEight} name="SizeTwo" onChange={updateValues} placeholder='SizeTwo'/>
                {/* <h4>SevenHalf:</h4> */}
                <input className={classes.EditEightHalf} name="SizeThree" onChange={updateValues} placeholder='SizeThree'/>
                
                
            </form>
            <button onClick={updateProd} className={classes.EditBut}> Edit Stock </button>            
            <button className={classes.CancelBut} onClick={closeModal}> Cancel </button>            



        </div>
        </>
    );
};

export default EditStock;