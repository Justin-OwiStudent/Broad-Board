import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import classes from "./Admin.module.css";
import EditStock from './EditStock';
import StockItem from './StockItem';


const Stock = () => {

  const [readProducts, setReadProducts] = useState();
  const [renderProducts, setRenderProducts] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:5000/api/allproducts").then((res) => {
      let data = res.data;
      console.log(data)
      const stockItem = data.map((item) => (
        <StockItem
          key={item._id}
          productId={item._id}
          SKU={item.SKU}
          ProductName={item.ProductName}
          Price={item.Price}
          Desc={item.Description}
          DiscPrice={item.DiscountedPrice}
          stock={item.stock}
          SizeOne={item.SizeOne}
          SizeTwo={item.SizeTwo}
          SizeThree={item.SizeThree}
          editRender={setRenderProducts}
        />
      ));
      setReadProducts(stockItem);
      setRenderProducts(false);
    });
  }, [renderProducts]);


  let defaultFormVals = ["ProductName", "Price", "DiscountedPrice", "Description", "SizeOne", "SizeTwo", "SizeThree"];

  const [formValues, setFormValues] = useState(defaultFormVals);
  
  const getValues = (e) =>{
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }
  
  const addProduct = (e) => {
      e.preventDefault();
  
      var stock = +formValues['SizeOne'] + +formValues['SizeTwo'] + +formValues['SizeThree'];
  
      let payload = {
          SKU: +formValues['SKU'],
          ProductName: formValues['ProductName'],
          Price: +formValues['Price'],
          DiscountedPrice: +formValues['DiscountedPrice'],
          stock: stock,
          Description: formValues['Description'] ,
          Sizes: { 
            sevenHalf: +formValues['SizeOne'],
            eight:  +formValues['SizeTwo'],
            eightHalf: +formValues['SizeThree'],
          }
    }

    console.log(payload)
  
    Axios.post('http://localhost:5000/api/addproduct', payload)
    .then((res)=> {
      if(res){
        console.log("Item Added"); 
        setRenderProducts(true);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  
    return (
      <>
      <Nav/>

      
    <Link to="/Stock"> <h1 className={classes.Stock}>Stock</h1> </Link>
    <Link to="/Orders"> <h1 className={classes.Orders}>Orders</h1> </Link>
      
      <div className={classes.AddingProd}>
        <h1 className={classes.AddTitle} >Add Product</h1>
        
        <form onSubmit={addProduct}>
          <input className={classes.AddName} name="ProductName" placeholder="Product Name" onChange={getValues}/>
          <input className={classes.AddDesc} name="Description" placeholder="Product Description" onChange={getValues}/>
          <input className={classes.AddPrice} name="Price" placeholder="Price" onChange={getValues}/>

          <input className={classes.AddDiscPrice} name="DiscountedPrice" placeholder="Discounted Price" onChange={getValues}/>

          <input className={classes.AddOne} name="SizeOne" placeholder="SizeOne" onChange={getValues}/>
          <input className={classes.AddTwo} name="SizeTwo" placeholder="SizeTwo" onChange={getValues}/>
          <input className={classes.AddThree} name="SizeThree" placeholder="SizeThree" onChange={getValues}/>
          <input className={classes.SKU} name="SKU" placeholder="SKU" onChange={getValues}/>


          <button type='submit' className={classes.addProduct}> Add Product </button>



        </form>
      </div>

      <div className={classes.main}>
          <div className={classes.titles}>
            <div className={classes.sku}> SKU </div>
            <div className={classes.pro}> Product Name</div>
            <div className={classes.stock}> Stock</div>
            <div className={classes.order}> Update Quantity </div>
          </div>


       
          {readProducts}

          {/* <div className={classes.Stocks}>
            <div className={classes.skuItem}> #1001 </div>
            <div className={classes.proItem}> product name</div>
            <div className={classes.stockItem}> stock</div>
            <button className={classes.orderItem}> Update Quantity </button>
          </div>

          <div className={classes.Stocks}>
            <div className={classes.skuItem}> #2001 </div>
            <div className={classes.proItem}> product name</div>
            <div className={classes.stockItem}> stock</div>
            <button className={classes.orderItem}> Update Quantity </button>
          </div> */}

      </div>

  
          {/* {props.modalArea} */}

      {/* <EditStock/> */}


        {/* <div className={classes.manage}>
        <div className={classes.MainManage}>
          <div className={classes.item}>
            <h1 className={classes.orderName}>Enjoi</h1>
            <h1 className={classes.orderDetails}> Quantity :5</h1>
            

            <div className={classes.actions}>
              <div className={classes.done}></div>
              <div className={classes.delete}></div>
            </div>
          </div>

          <div className={classes.item}>
          <h1 className={classes.orderName}>Almost</h1>
            <h1 className={classes.orderDetails}> Quantity :5</h1>

            <div className={classes.actions}>
              <div className={classes.done}></div>
              <div className={classes.delete}></div>
            </div>
          </div>
        </div>
      </div> */}
      </>
    );
};

export default Stock;