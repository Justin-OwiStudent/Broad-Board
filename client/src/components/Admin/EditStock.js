import Axios from "axios";
import React, { useState } from "react";
import classes from "./Admin.module.css";

const EditStock = (props) => {
  console.log(props);

  let editFormValues = {
    SKU: props.SKU,
    ProductName: props.ProductName,
    Price: props.Price,
    DiscPrice: props.DiscPrice,
    Desc: props.Desc,
    Sizes: props.Sizes,
    SizeOne: props.SizeOne,
    SizeTwo: props.SizeTwo,
    SizeThree: props.SizeThree,

  };
  console.log(editFormValues);

  const [editValues, setEditValues] = useState(editFormValues);

  const updateValues = (e) => {
    const { name, value } = e.target;
    setEditValues({ ...editValues, [name]: value });
    console.log(editValues);
  };

  const updateProd = (e) => {
    e.preventDefault();
    let productId = props.id;
    let payload = editValues;

    Axios.patch("http://localhost:5000/api/updateproduct/" + productId, payload)
      .then((res) => {
        if (res) {
          console.log("item updated");
          props.close();
          props.editRender(true);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const closeModal = () => {
    props.close();
  };

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

        <form className={classes.EditForm}>
          {/* <h4>SKU:</h4> */}
          <input
            className={classes.editSKU}
            name="SKU"
            defaultValue={props.SKU}
            onChange={updateValues}
            placeholder="SKU"
          />
          {/* <h4>Product Name:</h4> */}
          <input
            className={classes.editProdName}
            name="ProductName"
            defaultValue={props.ProductName}
            onChange={updateValues}
            placeholder="ProductName"
          />
          {/* <h4>Price:</h4> */}
          <input
            className={classes.editPrice}
            name="Price"
            defaultValue={props.Price}
            onChange={updateValues}
            placeholder="Price"
          />
          {/* <h4>DiscountedPrice:</h4> */}
          <input
            className={classes.editDiscountedPrice}
            name="DiscountedPrice"
            defaultValue={props.DiscPrice}
            onChange={updateValues}
            placeholder="DiscountedPrice"
          />
          {/* <h4>Description:</h4> */}
          <input
            className={classes.editDescription}
            name="Description"
            defaultValue={props.Desc}
            onChange={updateValues}
            placeholder="Description"
          />
          {/* <h4>SevenHalf:</h4> */}
          <input
            className={classes.EditSeven}
            name="SizeOne"
            defaultValue={props.SizeOne}
            onChange={updateValues}
            placeholder="SizeOne"
          />
          {/* <h4>SevenHalf:</h4> */}
          <input
            className={classes.EditEight}
            name="SizeTwo"
            defaultValue={props.SizeTwo}
            onChange={updateValues}
            placeholder="SizeTwo"
          />
          {/* <h4>SevenHalf:</h4> */}
          <input
            className={classes.EditEightHalf}
            name="SizeThree"
            defaultValue={props.SizeThree}
            onChange={updateValues}
            placeholder="SizeThree"
          />
        </form>
        <button onClick={updateProd} className={classes.EditBut}>
          {" "}
          Edit Stock{" "}
        </button>
        <button className={classes.CancelBut} onClick={closeModal}>
          {" "}
          Cancel{" "}
        </button>
      </div>
    </>
  );
};

export default EditStock;
